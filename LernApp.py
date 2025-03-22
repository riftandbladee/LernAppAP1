import tkinter as tk
from tkinter import messagebox
import random
from PIL import Image, ImageTk
import pygame

class DuolingoStyleGame:
    def __init__(self, root):
        # Initialize pygame for sounds
        pygame.mixer.init()
        
        # Main window setup
        self.root = root
        self.root.title("Python Language Learner")
        self.root.geometry("800x600")
        self.root.configure(bg="#f5f5f5")
        
        # Game state variables
        self.current_question = 0
        self.score = 0
        self.lives = 3
        self.questions = [
            {
                "type": "translation",
                "prompt": "Translate: Hello",
                "options": ["Hola", "Bonjour", "Ciao", "Hallo"],
                "correct": "Hola",
                "language": "Spanish"
            },
            {
                "type": "match",
                "prompt": "Match the word to its meaning",
                "options": ["Gato", "Perro", "Pájaro", "Pez"],
                "meanings": ["Cat", "Dog", "Bird", "Fish"],
                "correct": [0, 1, 2, 3]
            },
            {
                "type": "multiple_choice",
                "prompt": "Which word means 'thank you' in French?",
                "options": ["Gracias", "Danke", "Merci", "Grazie"],
                "correct": "Merci"
            },
            {
                "type": "fill_blank",
                "prompt": "Complete: Buenos ___",
                "options": ["días", "noches", "tardes", "amigos"],
                "correct": "días"
            },
            {
                "type": "listening",
                "prompt": "What did you hear?",
                "audio": "bonjour.mp3",  # Placeholder filename
                "options": ["Hello", "Goodbye", "Thank you", "Yes"],
                "correct": "Hello"
            }
        ]
        
        # Sound effects
        self.correct_sound = pygame.mixer.Sound  # Placeholder, would load actual file
        self.wrong_sound = pygame.mixer.Sound  # Placeholder, would load actual file
        
        # Create UI elements
        self.create_ui()
        
        # Start the game
        self.next_question()
    
    def create_ui(self):
        # Top bar with progress, lives, etc.
        self.top_frame = tk.Frame(self.root, bg="#2cb1f0", height=60)
        self.top_frame.pack(fill=tk.X)
        
        # Progress bar
        self.progress_frame = tk.Frame(self.top_frame, bg="#2cb1f0")
        self.progress_frame.pack(pady=10)
        
        self.progress_bars = []
        for i in range(5):  # 5 questions in our example
            progress_segment = tk.Frame(self.progress_frame, width=50, height=10, 
                                       bg="#dddddd" if i > 0 else "#58cc02")
            progress_segment.pack(side=tk.LEFT, padx=5)
            self.progress_bars.append(progress_segment)
        
        # Lives display
        self.lives_frame = tk.Frame(self.top_frame, bg="#2cb1f0")
        self.lives_frame.pack(side=tk.RIGHT, padx=20)
        
        self.lives_label = tk.Label(self.lives_frame, text="❤️ × 3", 
                                   font=("Arial", 14), bg="#2cb1f0")
        self.lives_label.pack()
        
        # Main content area
        self.content_frame = tk.Frame(self.root, bg="#f5f5f5")
        self.content_frame.pack(fill=tk.BOTH, expand=True, pady=20)
        
        # Question label
        self.question_label = tk.Label(self.content_frame, text="", 
                                      font=("Arial", 18, "bold"), bg="#f5f5f5",
                                      wraplength=700)
        self.question_label.pack(pady=20)
        
        # Options frame
        self.options_frame = tk.Frame(self.content_frame, bg="#f5f5f5")
        self.options_frame.pack(pady=20)
        
        # Button for checking answer
        self.check_button = tk.Button(self.root, text="Check", font=("Arial", 16, "bold"),
                                     bg="#58cc02", fg="white", width=20, height=2,
                                     command=self.check_answer)
        self.check_button.pack(side=tk.BOTTOM, pady=20)
        
        # Variables for tracking selected option
        self.selected_option = tk.StringVar()
        self.option_buttons = []
    
    def next_question(self):
        # Clear old options
        for button in self.option_buttons:
            button.destroy()
        self.option_buttons = []
        
        # Check if we've reached the end of questions
        if self.current_question >= len(self.questions):
            self.end_game()
            return
        
        # Update progress bar
        for i in range(len(self.progress_bars)):
            if i < self.current_question:
                self.progress_bars[i].config(bg="#58cc02")  # Green for completed
            elif i == self.current_question:
                self.progress_bars[i].config(bg="#2cb1f0")  # Blue for current
            else:
                self.progress_bars[i].config(bg="#dddddd")  # Grey for upcoming
        
        # Get current question data
        question = self.questions[self.current_question]
        
        # Set question text
        self.question_label.config(text=question["prompt"])
        
        # Create option buttons
        for i, option in enumerate(question["options"]):
            option_button = tk.Button(self.options_frame, text=option, font=("Arial", 14),
                                     bg="white", width=30, height=2, relief=tk.RAISED,
                                     command=lambda opt=option: self.select_option(opt))
            option_button.pack(pady=10)
            self.option_buttons.append(option_button)
    
    def select_option(self, option):
        # Reset all buttons to default style
        for button in self.option_buttons:
            button.config(bg="white", relief=tk.RAISED)
        
        # Highlight selected button
        for button in self.option_buttons:
            if button.cget("text") == option:
                button.config(bg="#e5e5e5", relief=tk.SUNKEN)
                self.selected_option.set(option)
    
    def check_answer(self):
        current_q = self.questions[self.current_question]
        correct_answer = current_q["correct"]
        
        if not hasattr(self, 'selected_option') or not self.selected_option.get():
            messagebox.showinfo("Select an Option", "Please select an answer first!")
            return
        
        user_answer = self.selected_option.get()
        
        if (user_answer == correct_answer) or (isinstance(correct_answer, list) and user_answer in current_q["options"][correct_answer[0]]):
            # Correct answer
            self.score += 1
            messagebox.showinfo("Correct!", "Great job!")
            # pygame.mixer.Sound.play(self.correct_sound) # Would play sound here
        else:
            # Wrong answer
            self.lives -= 1
            self.lives_label.config(text=f"❤️ × {self.lives}")
            messagebox.showinfo("Incorrect", f"The correct answer was: {correct_answer if isinstance(correct_answer, str) else current_q['options'][correct_answer[0]]}")
            # pygame.mixer.Sound.play(self.wrong_sound) # Would play sound here
            
            if self.lives <= 0:
                self.end_game()
                return
        
        # Move to next question
        self.current_question += 1
        self.selected_option.set("")
        self.next_question()
    
    def end_game(self):
        # Clear the screen
        for widget in self.content_frame.winfo_children():
            widget.destroy()
        self.check_button.destroy()
        
        # Show results
        result_label = tk.Label(self.content_frame, 
                               text=f"Game Over!\nYour Score: {self.score}/{len(self.questions)}",
                               font=("Arial", 24, "bold"), bg="#f5f5f5")
        result_label.pack(pady=50)
        
        # Emoji based on performance
        emoji = "🎉" if self.score >= len(self.questions) * 0.7 else "😊" if self.score >= len(self.questions) * 0.4 else "😢"
        emoji_label = tk.Label(self.content_frame, text=emoji, font=("Arial", 72), bg="#f5f5f5")
        emoji_label.pack(pady=20)
        
        # Restart button
        restart_button = tk.Button(self.content_frame, text="Play Again", font=("Arial", 16, "bold"),
                                  bg="#58cc02", fg="white", width=20, height=2,
                                  command=self.restart_game)
        restart_button.pack(pady=30)
    
    def restart_game(self):
        # Reset game state
        self.current_question = 0
        self.score = 0
        self.lives = 3
        self.lives_label.config(text="❤️ × 3")
        
        # Clear content frame
        for widget in self.content_frame.winfo_children():
            widget.destroy()
        
        # Recreate check button
        self.check_button = tk.Button(self.root, text="Check", font=("Arial", 16, "bold"),
                                     bg="#58cc02", fg="white", width=20, height=2,
                                     command=self.check_answer)
        self.check_button.pack(side=tk.BOTTOM, pady=20)
        
        # Shuffle questions for variety
        random.shuffle(self.questions)
        
        # Start fresh
        self.next_question()

# Run the application
if __name__ == "__main__":
    root = tk.Tk()
    app = DuolingoStyleGame(root)
    root.mainloop()