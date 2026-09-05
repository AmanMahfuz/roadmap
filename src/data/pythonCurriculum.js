// DevQuik: 15-Day Python to AI Fast-Track Curriculum
// Days 1–10: Core Syntax, Data Structures & OOP (Bro Code 12hr)
// Days 11–15: Modern AI Tooling, Environments, Pandas & LLM Integration (Dave Ebbelaar 5hr)

export const PYTHON_COURSE_METADATA = {
  id: 'python_ai_fasttrack',
  name: '15-Day Python to AI Fast-Track',
  icon: '🤖',
  badge: 'Python + AI',
  color: '#306998',
  secondaryColor: '#FFD438',
  bgColor: 'rgba(48, 105, 152, 0.12)',
  textColor: '#1e40af',
  gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #f59e0b 100%)',
  tagline: 'Master Python fundamentals, OOP, Pandas, APIs, and LLMs in 15 days.',
  description: 'Fast-track roadmap taking you from zero Python knowledge to building context-aware AI assistants and integrating LLM APIs.',
  difficulty: 'Beginner to AI Engineer',
  totalDays: 15,
  totalXp: 1850,
  broCodeVideoUrl: 'https://www.youtube.com/watch?v=ix9cRaBkVe0',
  daveVideoUrl: 'https://www.youtube.com/watch?v=ygXn5nV5qFc'
};

export const PYTHON_DAYS = [
  // ==========================================
  // PHASE 1: PYTHON ENGINE & CONTROL FLOW (DAYS 1–5)
  // ==========================================
  {
    day: 1,
    phase: 1,
    phaseTitle: 'Phase 1: Python Engine & Control Flow',
    title: 'Day 1: Setup, Variables & Type Casting',
    unit: 'Phase 1: Python Engine & Control Flow',
    topic: 'Setting up Python, data types (str, int, float, bool), and type casting.',
    estimatedTime: 25,
    xpReward: 100,
    videoSource: {
      platform: 'YouTube',
      instructor: 'Bro Code (Python Full Course)',
      timestamp: '00:00:00 – 00:30:00',
      url: 'https://www.youtube.com/watch?v=ix9cRaBkVe0&t=0s'
    },
    whatToLearn: {
      summary: 'Set up Python, understand dynamic variables, primitive data types (str, int, float, bool), and casting between types.',
      details: [
        'Python is a high-level interpreted programming language with clean syntax.',
        'Data Types: `str` (text), `int` (whole numbers), `float` (decimals), `bool` (True/False).',
        'Type Casting: Convert types using `int("25")`, `float(10)`, `str(100)`.',
        'Variable Swapping: Python allows multiple assignment `a, b = b, a` without temporary variables.',
        'f-strings: Format outputs cleanly with `f"Exercise: {name}, Reps: {reps}"`.'
      ],
      codeExample: `# Workout Routine Variables & Type Casting
exercise_name = "Deadlift"
reps = 8
weight_kg = 120.5
is_pr = True

print(f"Workout: {exercise_name} | Reps: {reps} | Weight: {weight_kg}kg | PR: {is_pr}")

# Calculate Days Lived
age_str = "22"
age = int(age_str)
days_lived = age * 365
print(f"Age {age} = ~{days_lived:,} days lived!")

# Pythonic variable swap
x, y = 10, 20
x, y = y, x
print(f"Swapped: x={x}, y={y}")`
    },
    tasks: [
      { id: 'p1_t1', text: 'Declare 3 variables for a workout routine: exercise_name (str), reps (int), and weight_kg (float)', completed: false },
      { id: 'p1_t2', text: 'Take input from a user for age, cast it to int, and calculate days lived (age * 365)', completed: false },
      { id: 'p1_t3', text: 'Swap two variables (a, b = b, a) without hardcoding values', completed: false }
    ],
    starterCode: `# Day 1: Workout Routine & Days Lived Challenge
# -----------------------------------------------

# TODO 1: Declare 3 variables for your workout:
# - exercise_name (string, e.g. "Bench Press")
# - reps (integer, e.g. 10)
# - weight_kg (float, e.g. 80.0)
exercise_name = "Bench Press"
reps = 10
weight_kg = 80.0

# TODO 2: Cast the age string to an int and calculate days_lived (age * 365)
age_str = "24"
age = int(age_str)
days_lived = age * 365

# TODO 3: Swap variables a and b in a single line (a, b = b, a)
a = 100
b = 200
a, b = b, a

# TODO 4: Print your outputs with formatted f-strings:
print(f"Exercise: {exercise_name} ({reps} reps @ {weight_kg}kg)")
print(f"Estimated Days Lived: {days_lived}")
print(f"Swapped values: a={a}, b={b}")
`,
    expectedKeyword: "Exercise: Bench Press",
    mcqQuestions: [
      {
        id: 1,
        question: "What will be the output of type(3.14) in Python?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'number'>"],
        answer: 1,
        explanation: "`3.14` has a decimal fraction, making it a floating-point number (`<class 'float'>`)."
      },
      {
        id: 2,
        question: "What is the result of int(\"42\") + 8?",
        options: ["50", "\"428\"", "TypeError", "42.8"],
        answer: 0,
        explanation: "`int(\"42\")` casts the string to integer 42, which then adds with 8 to equal 50."
      },
      {
        id: 3,
        question: "Which of the following variable names is invalid in Python?",
        options: ["user_age", "_daily_streak", "2nd_score", "totalScore"],
        answer: 2,
        explanation: "Variable names in Python cannot begin with a digit (e.g., `2nd_score` is invalid)."
      },
      {
        id: 4,
        question: "What will bool(\"\") evaluate to?",
        options: ["True", "False", "None", "Error"],
        answer: 1,
        explanation: "Empty strings, empty collections, and zero evaluate to `False` (falsy) in boolean context."
      },
      {
        id: 5,
        question: "How do you swap values of variables a and b in idiomatic Python?",
        options: ["swap(a, b)", "a = b; b = a", "a, b = b, a", "a.swap(b)"],
        answer: 2,
        explanation: "Tuple unpacking `a, b = b, a` swaps values atomically without needing a temp variable."
      }
    ]
  },

  {
    day: 2,
    phase: 1,
    phaseTitle: 'Phase 1: Python Engine & Control Flow',
    title: 'Day 2: User Input, Math Operators & If-Else',
    unit: 'Phase 1: Python Engine & Control Flow',
    topic: 'input(), basic arithmetic, comparison operators, and if-elif-else branching.',
    estimatedTime: 30,
    xpReward: 100,
    videoSource: {
      platform: 'YouTube',
      instructor: 'Bro Code (Python Full Course)',
      timestamp: '00:30:00 – 01:05:00',
      url: 'https://www.youtube.com/watch?v=ix9cRaBkVe0&t=1800s'
    },
    whatToLearn: {
      summary: 'Capture user input, perform mathematical operations (modulo, floor division), and control execution flow with if-elif-else.',
      details: [
        '`input()` captures terminal user keystrokes always as string.',
        'Floor Division (`//`) divides and truncates to integer; Modulo (`%`) gets remainder.',
        'Logical Operators: `and`, `or`, `not`.',
        'Conditional Branching: `if`, `elif`, and `else`.'
      ],
      codeExample: `# Calorie Target Checker
calories_eaten = 2100
target = 2000

if calories_eaten > target + 200:
    print(f"Surplus: {calories_eaten - target} kcal above target.")
elif calories_eaten < target - 200:
    print(f"Deficit: {target - calories_eaten} kcal under target.")
else:
    print("Optimal target hit!")`
    },
    tasks: [
      { id: 'p2_t1', text: 'Build a Tip Calculator: take total bill, percentage (10/15/20), and calculate final cost', completed: false },
      { id: 'p2_t2', text: 'Implement an odd/even number detector using modulo (%)', completed: false },
      { id: 'p2_t3', text: 'Write a calorie tracker checking surplus vs deficit with if-elif-else', completed: false }
    ],
    starterCode: `# Day 2: Calorie Checker & Odd/Even Challenge
# --------------------------------------------

# TODO 1: Calculate total bill including tip percentage
bill = 50.0
tip_pct = 15
total = bill + (bill * (tip_pct / 100))

# TODO 2: Check if a number is odd or even using modulo (%)
number = 17
is_even = (number % 2 == 0)

# TODO 3: Implement if-elif-else to determine calorie status
cals = 2200
target = 2000

if cals > target:
    status = "Surplus"
elif cals < target:
    status = "Deficit"
else:
    status = "On Target"

# Print your results:
print(f"Total with tip: \${total:,.2f}")
print(f"Number {number} is {'Even' if is_even else 'Odd'}")
print(f"Calorie Status: {status}")
`,
    expectedKeyword: "Calorie Status",
    mcqQuestions: [
      {
        id: 6,
        question: "What data type does the built-in input() function always return?",
        options: ["int", "str", "float", "Depends on what user types"],
        answer: 1,
        explanation: "`input()` always returns user input as a string (`str`), requiring explicit casting if numbers are needed."
      },
      {
        id: 7,
        question: "What is the value of 17 // 3?",
        options: ["5.66", "5", "2", "6"],
        answer: 1,
        explanation: "`//` is floor division, which rounds down to the nearest integer (17 // 3 = 5)."
      },
      {
        id: 8,
        question: "What does 17 % 5 evaluate to?",
        options: ["3", "3.4", "2", "1"],
        answer: 2,
        explanation: "17 divided by 5 equals 3 with a remainder of 2. Modulo `%` returns the remainder (2)."
      },
      {
        id: 9,
        question: "In Python, which keyword represents \"else if\"?",
        options: ["elseif", "else if", "elsif", "elif"],
        answer: 3,
        explanation: "Python uses `elif` for chained conditional branches."
      },
      {
        id: 10,
        question: "What is the result of False or (True and not False)?",
        options: ["False", "True", "None", "Error"],
        answer: 1,
        explanation: "`not False` is `True`. `True and True` is `True`. `False or True` evaluates to `True`."
      }
    ]
  },

  {
    day: 3,
    phase: 1,
    phaseTitle: 'Phase 1: Python Engine & Control Flow',
    title: 'Day 3: String Methods, Slicing & Format Specifiers',
    unit: 'Phase 1: Python Engine & Control Flow',
    topic: 'Indexing, slicing [start:stop:step], f-strings, and string methods.',
    estimatedTime: 30,
    xpReward: 100,
    videoSource: {
      platform: 'YouTube',
      instructor: 'Bro Code (Python Full Course)',
      timestamp: '01:05:00 – 01:45:00',
      url: 'https://www.youtube.com/watch?v=ix9cRaBkVe0&t=3900s'
    },
    whatToLearn: {
      summary: 'Master string indexing, slicing [start:stop:step], reverse slicing, and string manipulation methods (.strip(), .replace(), .split()).',
      details: [
        'Zero-indexed slicing: `string[start:stop:step]`.',
        'Reverse string idiom: `string[::-1]`.',
        'Methods: `.upper()`, `.lower()`, `.strip()`, `.replace(a, b)`, `.split(sep)`.',
        'Format Specifiers: `f"{price:,.2f}"` (commas + 2 decimal places).'
      ],
      codeExample: `# Email Domain Extractor & Clean String
email = "  developer@aiengineers.org  "
clean_email = email.strip().lower()
username, domain = clean_email.split("@")

print(f"User: {username} | Domain: {domain}")

# String reversal & masking
api_key = "sk-live-987654321"
masked = api_key[:4] + ("*" * 10) + api_key[-4:]
print(f"Masked API Key: {masked}")`
    },
    tasks: [
      { id: 'p3_t1', text: 'Extract the username and domain from any given email address using .split("@")', completed: false },
      { id: 'p3_t2', text: 'Build a palindrome checker using step slicing (s == s[::-1])', completed: false },
      { id: 'p3_t3', text: 'Format an account balance with currency format specifiers (e.g. $1,250.50)', completed: false }
    ],
    starterCode: `# Day 3: Email Extractor & Palindrome Challenge
# -----------------------------------------------

# TODO 1: Extract username and domain from email using .split("@")
email = "alex@devquik.io"
username, domain = email.split("@")

# TODO 2: Check if word is a palindrome using step slicing [::-1]
word = "radar"
is_palindrome = (word == word[::-1])

# TODO 3: Format account balance with currency format specifier (e.g. :,\$ or :.2f)
balance = 1250000.75
formatted_balance = f"\${balance:,.2f}"

# Print your results:
print(f"Parsed Email -> User: {username}, Domain: {domain}")
print(f"Is '{word}' a palindrome? {is_palindrome}")
print(f"Bank Balance: {formatted_balance}")
`,
    expectedKeyword: "Parsed Email",
    mcqQuestions: [
      {
        id: 11,
        question: "If s = \"DevQuik\", what does s[1:4] return?",
        options: ["\"Dev\"", "\"evQ\"", "\"evQu\"", "\"DevQ\""],
        answer: 1,
        explanation: "Slicing `s[1:4]` starts at index 1 ('e') and stops before index 4 ('u'), returning 'evQ'."
      },
      {
        id: 12,
        question: "How do you reverse a string s using slice notation?",
        options: ["s[0:-1]", "s[::-1]", "s.reverse()", "s[-1:0]"],
        answer: 1,
        explanation: "`s[::-1]` uses a step of -1 to step backward from the end to the start."
      },
      {
        id: 13,
        question: "What does \"  hello  \".strip() return?",
        options: ["\"hello\"", "\" hello \"", "\"hello  \"", "\"\""],
        answer: 0,
        explanation: "`.strip()` removes leading and trailing whitespace from both ends of the string."
      },
      {
        id: 14,
        question: "How do you format a float num = 1234.567 to 2 decimal places using an f-string?",
        options: ["f\"{num:2f}\"", "f\"{num:.2f}\"", "f\"{num.round(2)}\"", "f\"{num:,.2}\""],
        answer: 1,
        explanation: "`f\"{num:.2f}\"` rounds and formats the float to 2 fixed decimal places."
      },
      {
        id: 15,
        question: "What will \"user@mail.com\".split(\"@\")[1] produce?",
        options: ["\"user\"", "\"mail.com\"", "\"@mail.com\"", "[\"user\", \"mail.com\"]"],
        answer: 1,
        explanation: "`.split(\"@\")` creates `[\"user\", \"mail.com\"]`. Index `[1]` accesses the domain \"mail.com\"."
      }
    ]
  },

  {
    day: 4,
    phase: 1,
    phaseTitle: 'Phase 1: Python Engine & Control Flow',
    title: 'Day 4: Loops (While, For) & Iteration Logic',
    unit: 'Phase 1: Python Engine & Control Flow',
    topic: 'while loops, for loops, range(), break, continue, and loop control.',
    estimatedTime: 35,
    xpReward: 100,
    videoSource: {
      platform: 'YouTube',
      instructor: 'Bro Code (Python Full Course)',
      timestamp: '01:45:00 – 02:30:00',
      url: 'https://www.youtube.com/watch?v=ix9cRaBkVe0&t=6300s'
    },
    whatToLearn: {
      summary: 'Master `for` loops, `while` loops, `range()` generator, loop interruption with `break` and skipping with `continue`.',
      details: [
        '`for item in iterable:` traverses sequence elements directly.',
        '`range(start, stop, step)` generates integer intervals.',
        '`break` immediately exits loop; `continue` skips to next iteration.',
        '`while condition:` runs until condition is no longer truthy.'
      ],
      codeExample: `# Daily Study Countdown & Fibonacci
fib = [0, 1]
for _ in range(8):
    fib.append(fib[-1] + fib[-2])
print(f"Fibonacci Sequence: {fib}")

# While loop countdown with condition
countdown = 5
while countdown > 0:
    print(f"T-minus {countdown}...")
    countdown -= 1
print("Liftoff! 🚀")`
    },
    tasks: [
      { id: 'p4_t1', text: 'Generate the first 10 numbers of the Fibonacci sequence using a for loop', completed: false },
      { id: 'p4_t2', text: 'Create a countdown timer simulator with while loops', completed: false },
      { id: 'p4_t3', text: 'Use continue to skip printing even numbers in range(1, 21)', completed: false }
    ],
    starterCode: `# Day 4: Fibonacci & Loops Challenge
# -------------------------------------

# TODO 1: Generate the first 10 Fibonacci numbers using a for loop
fib = [0, 1]
for _ in range(8):
    fib.append(fib[-1] + fib[-2])

# TODO 2: Collect only odd numbers from 1 to 20 using continue to skip evens
odds = []
for n in range(1, 21):
    if n % 2 == 0:
        continue
    odds.append(n)

# Print results:
print(f"Fibonacci (10 numbers): {fib}")
print(f"Odd numbers (1-20): {odds}")
`,
    expectedKeyword: "Fibonacci (10 numbers)",
    mcqQuestions: [
      {
        id: 16,
        question: "What will list(range(1, 6)) produce?",
        options: ["[1, 2, 3, 4, 5, 6]", "[1, 2, 3, 4, 5]", "[0, 1, 2, 3, 4, 5]", "[2, 3, 4, 5, 6]"],
        answer: 1,
        explanation: "`range(1, 6)` starts at 1 and stops before 6, generating integers 1 through 5."
      },
      {
        id: 17,
        question: "Which keyword immediately terminates the enclosing loop?",
        options: ["pass", "continue", "break", "stop"],
        answer: 2,
        explanation: "`break` immediately halts the loop and transfers execution to the statement following the loop."
      },
      {
        id: 18,
        question: "What does continue do inside a loop?",
        options: ["Exits the entire loop", "Skips the rest of the current iteration and goes to the next", "Pauses loop execution", "Restarts the loop from 0"],
        answer: 1,
        explanation: "`continue` skips the remaining lines inside the current loop body and proceeds to the next iteration."
      },
      {
        id: 19,
        question: "When does the else block attached to a for loop execute?",
        options: ["Every time an iteration finishes", "Only when the loop finishes without hitting a break", "Only if the loop encounters an error", "Never"],
        answer: 1,
        explanation: "A loop `else` block runs only if the loop ran to natural completion without encountering `break`."
      },
      {
        id: 20,
        question: "How many times does this loop run: i = 0; while i < 5: i += 2?",
        options: ["5 times", "2 times", "3 times", "Infinite loop"],
        answer: 2,
        explanation: "`i` starts at 0 (iter 1), becomes 2 (iter 2), becomes 4 (iter 3), becomes 6 (loop terminates). 3 iterations."
      }
    ]
  },

  {
    day: 5,
    phase: 1,
    phaseTitle: 'Phase 1: Python Engine & Control Flow',
    title: 'Day 5: Milestone Checkpoint 1 — Habit & Streak Engine',
    unit: 'Phase 1: Python Engine & Control Flow',
    topic: 'Consolidation project: CLI Habit Streak & Activity Simulator combining control flow and math.',
    estimatedTime: 40,
    xpReward: 150,
    isMilestone: true,
    badgeAward: 'Loop Master 🏆',
    videoSource: {
      platform: 'YouTube',
      instructor: 'Bro Code (Python Full Course)',
      timestamp: '02:30:00 – 03:00:00',
      url: 'https://www.youtube.com/watch?v=ix9cRaBkVe0&t=9000s'
    },
    whatToLearn: {
      summary: 'Combine variables, conditionals, while loops, string formatting, and validation into a working CLI Habit Streak simulator.',
      details: [
        'Control Flow Architecture: combine while loops with condition guards.',
        'Data tracking: maintain streak counters and score accumulation.',
        'Validation: handle invalid user entries gracefully.',
        'Milestone Checkpoint: Completing Day 5 unlocks your Loop Master Badge.'
      ],
      codeExample: `# CLI Streak Simulator
current_streak = 5
target_streak = 15
daily_xp = 50
total_xp = current_streak * daily_xp

print(f"🔥 Current Streak: {current_streak} Days")
print(f"⚡ Total XP Earned: {total_xp} XP")
print(f"🎯 Target: {round((current_streak / target_streak) * 100)}% to AI Milestone")`
    },
    tasks: [
      { id: 'p5_t1', text: 'Design a CLI loop that tracks consecutive habit days', completed: false },
      { id: 'p5_t2', text: 'Award +50 XP per consecutive day and calculate total bonus XP', completed: false },
      { id: 'p5_t3', text: 'Pass milestone checkpoint to earn the Loop Master 🏆 Badge', completed: false }
    ],
    starterCode: `# Day 5 Milestone: Habit Tracker Engine Challenge
# --------------------------------------------------

# TODO 1: Set up habit streak tracking variables
streak = 5
daily_xp = 50

# TODO 2: Calculate total earned XP and completion percentage toward 15 days
total_xp = streak * daily_xp
completion_pct = (streak / 15) * 100

# Print your habit summary:
print(f"🔥 Streak: {streak} days")
print(f"⚡ XP Earned: {total_xp} XP")
print(f"Progress: {completion_pct:.1f}% to AI Fast-Track completion")
`,
    expectedKeyword: "Streak: 5 days",
    mcqQuestions: [
      {
        id: 21,
        question: "Which code correctly tracks a 3-streak condition?",
        options: ["if streak == 3: print(\"3 days!\")", "if streak = 3: print(\"3 days!\")", "if streak is 3: print(\"3 days!\")", "if streak in 3: print(\"3 days!\")"],
        answer: 0,
        explanation: "`==` is the equality comparison operator. Single `=` is variable assignment."
      },
      {
        id: 22,
        question: "What happens if an infinite while True: loop has no break or exit condition?",
        options: ["Python terminates after 1000 iterations", "It runs indefinitely until manually stopped or memory/process ends", "It throws a RecursionError", "It automatically converts to a for loop"],
        answer: 1,
        explanation: "Without a `break`, `return`, or exception, `while True:` runs infinitely until interrupted (e.g. Ctrl+C)."
      },
      {
        id: 23,
        question: "What does pass do in Python?",
        options: ["Terminates a loop", "Acts as a null statement / placeholder that does nothing", "Skips the next statement", "Returns True"],
        answer: 1,
        explanation: "`pass` is a syntactic placeholder used when a statement is required syntactically but no code should run."
      },
      {
        id: 24,
        question: "What will int(\"10.5\") raise?",
        options: ["TypeError", "ValueError", "ConversionError", "It returns 10"],
        answer: 1,
        explanation: "`int()` cannot directly parse string representations of float literals; it raises a `ValueError`."
      },
      {
        id: 25,
        question: "What is the value of bool(0) and bool(1)?",
        options: ["True, False", "False, True", "False, False", "True, True"],
        answer: 1,
        explanation: "`0` is falsy (`False`), while non-zero numbers like `1` evaluate to `True`."
      }
    ]
  },

  // ==========================================
  // PHASE 2: COLLECTIONS, FUNCTIONS & ARCHITECTURE (DAYS 6–10)
  // ==========================================
  {
    day: 6,
    phase: 2,
    phaseTitle: 'Phase 2: Collections, Functions & Architecture',
    title: 'Day 6: Lists, Tuples & Sets',
    unit: 'Phase 2: Collections, Functions & Architecture',
    topic: 'List methods (.append, .pop, .sort), tuples (immutability), and sets (uniqueness).',
    estimatedTime: 30,
    xpReward: 100,
    videoSource: {
      platform: 'YouTube',
      instructor: 'Bro Code (Python Full Course)',
      timestamp: '03:00:00 – 03:45:00',
      url: 'https://www.youtube.com/watch?v=ix9cRaBkVe0&t=10800s'
    },
    whatToLearn: {
      summary: 'Understand Python core collections: mutable Lists, immutable Tuples, and unique unordered Sets with set operations.',
      details: [
        'Lists `[]`: Ordered, mutable sequence with `.append()`, `.pop()`, `.sort()`.',
        'Tuples `()`: Ordered, immutable sequence (ideal for coordinates, constant records).',
        'Sets `{}`: Unordered collection of unique items; great for deduplication.',
        'Set Operations: Union (`|`), Intersection (`&`), Difference (`-`).'
      ],
      codeExample: `# Workout tracking with Lists, Sets & Tuples
logged_exercises = ["Squat", "Bench", "Deadlift", "Squat", "Bench"]
unique_exercises = set(logged_exercises)
print(f"Unique exercises practiced: {unique_exercises}")

# Immutable coordinate
gym_location = (37.7749, -122.4194)
lat, lon = gym_location
print(f"Gym Coordinates -> Lat: {lat}, Lon: {lon}")`
    },
    tasks: [
      { id: 'p6_t1', text: 'Create a list of test scores and sort them in descending order', completed: false },
      { id: 'p6_t2', text: 'Deduplicate a list of student names using a set', completed: false },
      { id: 'p6_t3', text: 'Store geographical coordinates in a tuple and unpack them', completed: false }
    ],
    starterCode: `# Day 6: Collections Challenge
# -----------------------------

# TODO 1: Create a list of scores and sort them in descending order (.sort(reverse=True))
scores = [88, 92, 79, 95, 84]
scores.sort(reverse=True)

# TODO 2: Remove duplicates from a list of names using set()
raw_names = ["Alex", "Sara", "Alex", "David", "Sara"]
unique_names = list(set(raw_names))

# TODO 3: Store and unpack geographical coordinates from a tuple
coordinates = (37.7749, -122.4194)
lat, lon = coordinates

# Print your results:
print(f"Sorted Scores: {scores}")
print(f"Unique Names: {unique_names}")
print(f"Coordinates: Lat {lat}, Lon {lon}")
`,
    expectedKeyword: "Sorted Scores",
    mcqQuestions: [
      {
        id: 26,
        question: "Which data structure is immutable?",
        options: ["List", "Set", "Tuple", "Dictionary"],
        answer: 2,
        explanation: "Tuples cannot be modified after creation, making them immutable."
      },
      {
        id: 27,
        question: "How do you append the item \"Python\" to a list langs?",
        options: ["langs.add(\"Python\")", "langs.push(\"Python\")", "langs.append(\"Python\")", "langs.insert(\"Python\")"],
        answer: 2,
        explanation: "`.append(item)` is the standard list method to add an element to the end of a list."
      },
      {
        id: 28,
        question: "What is the easiest way to remove duplicates from [1, 2, 2, 3, 3, 4]?",
        options: ["list(set([1, 2, 2, 3, 3, 4]))", "[1, 2, 2, 3, 3, 4].unique()", "[1, 2, 2, 3, 3, 4].dedup()", "tuple([1, 2, 2, 3, 3, 4])"],
        answer: 0,
        explanation: "Converting to a `set` automatically strips duplicates, and converting back to `list` restores list form."
      },
      {
        id: 29,
        question: "What does nums.pop() do without arguments?",
        options: ["Removes and returns the first element", "Removes and returns the last element", "Clears the entire list", "Throws a SyntaxError"],
        answer: 1,
        explanation: "`.pop()` without an index removes and returns the rightmost (last) item of the list."
      },
      {
        id: 30,
        question: "How do you unpack point = (10, 20) into two variables x and y?",
        options: ["x = point[0], y = point[1]", "x, y = point", "(x, y) <= point", "unpack(point, x, y)"],
        answer: 1,
        explanation: "`x, y = point` unpacks sequence elements directly into corresponding variables."
      }
    ]
  },

  {
    day: 7,
    phase: 2,
    phaseTitle: 'Phase 2: Collections, Functions & Architecture',
    title: 'Day 7: Dictionaries & 2D Data Structures',
    unit: 'Phase 2: Collections, Functions & Architecture',
    topic: 'Key-value pairs, nested dictionaries, .get(), .items(), .keys(), and iteration.',
    estimatedTime: 35,
    xpReward: 100,
    videoSource: {
      platform: 'YouTube',
      instructor: 'Bro Code (Python Full Course)',
      timestamp: '03:45:00 – 04:30:00',
      url: 'https://www.youtube.com/watch?v=ix9cRaBkVe0&t=13500s'
    },
    whatToLearn: {
      summary: 'Master key-value mapping with Dictionaries, safe lookup with `.get()`, dictionary views, and nested 2D dictionary matrices.',
      details: [
        'Dictionaries `{key: value}` provide O(1) hash map lookups.',
        'Safe access: `dict.get("key", default_value)` avoids raising `KeyError`.',
        'Iteration: `for k, v in dict.items():` traverses both keys and values.',
        'Nested structures: map complex records (e.g. database rows, JSON payloads).'
      ],
      codeExample: `# Food Log & Calorie Mapping
food_log = {
    "breakfast": {"item": "Oatmeal & Berries", "cals": 350},
    "lunch": {"item": "Grilled Chicken Salad", "cals": 550},
    "dinner": {"item": "Salmon & Quinoa", "cals": 650}
}

total_cals = sum(meal["cals"] for meal in food_log.values())
print(f"Total Daily Calories: {total_cals} kcal")`
    },
    tasks: [
      { id: 'p7_t1', text: 'Build a contact book dictionary with name, email, and phone', completed: false },
      { id: 'p7_t2', text: 'Write a food calorie counter that safely accesses items with .get()', completed: false },
      { id: 'p7_t3', text: 'Iterate over a nested dictionary printing structured key-value reports', completed: false }
    ],
    starterCode: `# Day 7: Dictionary Data Structures Challenge
# --------------------------------------------

# TODO 1: Create a dictionary of nutrition calorie data
nutrition_db = {
    "apple": 95,
    "banana": 105,
    "egg": 78,
    "chicken_breast": 165
}

# TODO 2: Safely calculate total calories from meal list using .get(item, 0)
meal = ["apple", "egg", "egg", "avocado"]
total_calories = 0

for item in meal:
    cals = nutrition_db.get(item, 0)
    total_calories += cals

# Print your results:
print(f"Total meal calories: {total_calories} kcal")
`,
    expectedKeyword: "Total meal calories",
    mcqQuestions: [
      {
        id: 31,
        question: "How do you safely access key \"calories\" from dict d without raising a KeyError if missing?",
        options: ["d[\"calories\"]", "d.fetch(\"calories\", 0)", "d.get(\"calories\", 0)", "d.find(\"calories\")"],
        answer: 2,
        explanation: "`d.get(key, default)` returns the default value (e.g. 0) if the key does not exist, avoiding `KeyError`."
      },
      {
        id: 32,
        question: "What method returns all key-value pairs of a dictionary as tuples?",
        options: [".keys()", ".values()", ".items()", ".pairs()"],
        answer: 2,
        explanation: "`.items()` yields `(key, value)` tuple pairs suitable for unpacking in loops."
      },
      {
        id: 33,
        question: "How do you delete the key \"age\" from dictionary user?",
        options: ["del user[\"age\"]", "user.remove(\"age\")", "user.delete(\"age\")", "user.popkey(\"age\")"],
        answer: 0,
        explanation: "`del user[\"age\"]` or `user.pop(\"age\")` removes a key from a dictionary."
      },
      {
        id: 34,
        question: "What data type can be used as a dictionary key?",
        options: ["A list", "Another dictionary", "An immutable hashable type like str or int", "Any mutable object"],
        answer: 2,
        explanation: "Dictionary keys must be hashable and immutable (e.g., `str`, `int`, `float`, `tuple`)."
      },
      {
        id: 35,
        question: "Given data = {\"user\": {\"name\": \"Alex\", \"xp\": 250}}, how do you access xp?",
        options: ["data[\"user\", \"xp\"]", "data[\"user\"][\"xp\"]", "data.user.xp", "data[\"xp\"]"],
        answer: 1,
        explanation: "Nested dictionary access chains keys: `data[\"user\"][\"xp\"]`."
      }
    ]
  },

  {
    day: 8,
    phase: 2,
    phaseTitle: 'Phase 2: Collections, Functions & Architecture',
    title: 'Day 8: Functions, Scope & *args / **kwargs',
    unit: 'Phase 2: Collections, Functions & Architecture',
    topic: 'def, parameters vs arguments, return values, global vs local scope, and variable arguments.',
    estimatedTime: 35,
    xpReward: 100,
    videoSource: {
      platform: 'YouTube',
      instructor: 'Bro Code (Python Full Course)',
      timestamp: '04:30:00 – 05:15:00',
      url: 'https://www.youtube.com/watch?v=ix9cRaBkVe0&t=16200s'
    },
    whatToLearn: {
      summary: 'Write modular Python functions with default parameters, type hints, return statements, variable positional args (*args) and keyword args (**kwargs).',
      details: [
        '`def func(param1, param2="default"):` defines reusable code blocks.',
        '`*args` gathers arbitrary positional arguments into a tuple.',
        '`**kwargs` gathers arbitrary keyword arguments into a dictionary.',
        'Scope hierarchy: LEGB (Local, Enclosing, Global, Built-in).'
      ],
      codeExample: `# Habit tracker score calculator
def calculate_user_level(xp: int, multiplier: float = 1.0) -> int:
    adjusted_xp = xp * multiplier
    return int(adjusted_xp // 100) + 1

def log_user_stats(username: str, *activities, **metadata):
    print(f"User: {username} | Activities: {activities}")
    for k, v in metadata.items():
        print(f"  {k}: {v}")

log_user_stats("Aman", "Deadlift", "Coding", streak=5, tier="Pro")`
    },
    tasks: [
      { id: 'p8_t1', text: 'Write a function calculate_bmi(weight_kg, height_m) returning formatted BMI', completed: false },
      { id: 'p8_t2', text: 'Implement a function using *args to sum any quantity of input numbers', completed: false },
      { id: 'p8_t3', text: 'Create a user profile generator function utilizing **kwargs', completed: false }
    ],
    starterCode: `# Day 8: Functions & *args/**kwargs Challenge
# --------------------------------------------

# TODO 1: Define a function to calculate BMI rounded to 2 decimals
def calculate_bmi(weight_kg: float, height_m: float) -> float:
    return round(weight_kg / (height_m ** 2), 2)

# TODO 2: Define a function using *args to calculate total XP from multiple sessions
def compute_total_xp(*scores) -> int:
    return sum(scores)

# TODO 3: Define a function using **kwargs to construct a profile dict
def build_profile(username, **details):
    return {"user": username, "meta": details}

# Test functions:
bmi = calculate_bmi(75, 1.78)
total = compute_total_xp(100, 50, 75, 25)
profile = build_profile("alex_dev", streak=5, role="AI Learner")

# Print your results:
print(f"Calculated BMI: {bmi}")
print(f"Total XP: {total}")
print(f"Profile: {profile}")
`,
    expectedKeyword: "Calculated BMI",
    mcqQuestions: [
      {
        id: 36,
        question: "What keyword is used to return a value from a function?",
        options: ["send", "output", "return", "yield only"],
        answer: 2,
        explanation: "`return` exits the function and passes the specified value back to the caller."
      },
      {
        id: 37,
        question: "What type of object does *args collect inside a function?",
        options: ["List", "Tuple", "Dictionary", "Set"],
        answer: 1,
        explanation: "`*args` packs positional arguments into an immutable `tuple`."
      },
      {
        id: 38,
        question: "What type of object does **kwargs collect inside a function?",
        options: ["List", "Tuple", "Dictionary", "Generator"],
        answer: 2,
        explanation: "`**kwargs` packs keyword arguments into a standard key-value `dict`."
      },
      {
        id: 39,
        question: "What happens if a function has no return statement?",
        options: ["It returns 0", "It returns False", "It returns None", "It throws a CompilationError"],
        answer: 2,
        explanation: "Functions in Python implicitly return `None` when no return statement executes."
      },
      {
        id: 40,
        question: "How do you access a global variable total for modification inside a local function?",
        options: ["global total", "extern total", "outer total", "use total"],
        answer: 0,
        explanation: "`global variable_name` declares that variable assignment binds to global scope."
      }
    ]
  },

  {
    day: 9,
    phase: 2,
    phaseTitle: 'Phase 2: Collections, Functions & Architecture',
    title: 'Day 9: List Comprehensions & Exception Handling',
    unit: 'Phase 2: Collections, Functions & Architecture',
    topic: 'Pythonic list/dict comprehensions, try-except-finally blocks, and custom error handling.',
    estimatedTime: 35,
    xpReward: 100,
    videoSource: {
      platform: 'YouTube',
      instructor: 'Bro Code (Python Full Course)',
      timestamp: '05:15:00 – 06:00:00',
      url: 'https://www.youtube.com/watch?v=ix9cRaBkVe0&t=18900s'
    },
    whatToLearn: {
      summary: 'Write elegant list comprehensions for data transformations and safeguard code execution with `try`, `except`, `else`, `finally`.',
      details: [
        'List Comprehension: `[expression for item in iterable if condition]`.',
        'Dict Comprehension: `{k: v for k, v in iterable}`.',
        'Exception Handling: catch `ValueError`, `ZeroDivisionError`, `KeyError`.',
        '`finally` block always runs regardless of whether errors occurred.'
      ],
      codeExample: `# Temperature Conversion with List Comprehensions
c_temps = [0, 10, 20, 30, 40]
f_temps = [(c * 9/5) + 32 for c in c_temps]
print(f"Fahrenheit: {f_temps}")

# Robust Number Parsing
def safe_parse_int(val):
    try:
        return int(val)
    except (ValueError, TypeError) as err:
        print(f"Parsing error for '{val}': {err}")
        return 0`
    },
    tasks: [
      { id: 'p9_t1', text: 'Transform Celsius temperatures to Fahrenheit with a list comprehension', completed: false },
      { id: 'p9_t2', text: 'Filter numbers > 50 from a list using conditional comprehension', completed: false },
      { id: 'p9_t3', text: 'Write a try-except-finally block guarding against ZeroDivisionError and ValueError', completed: false }
    ],
    starterCode: `# Day 9: Comprehensions & Error Handling Challenge
# -------------------------------------------------

# TODO 1: Transform Celsius to Fahrenheit with list comprehension: [(c * 9/5) + 32 for c in c_temps]
c_temps = [0, 25, 100]
f_temps = [(c * 9/5) + 32 for c in c_temps]

# TODO 2: Write safe_divide with try-except guarding ZeroDivisionError and TypeError
def safe_divide(a, b):
    try:
        res = a / b
    except ZeroDivisionError:
        return "Cannot divide by zero"
    except TypeError:
        return "Invalid operand types"
    else:
        return f"Result: {res}"
    finally:
        pass

# Print outputs:
print(f"Fahrenheit temps: {f_temps}")
print(safe_divide(100, 4))
print(safe_divide(50, 0))
`,
    expectedKeyword: "Fahrenheit temps",
    mcqQuestions: [
      {
        id: 41,
        question: "Which list comprehension squares all even numbers in nums?",
        options: ["[x*2 for x in nums if x % 2 == 0]", "[x**2 for x in nums if x % 2 == 0]", "[x**2 if x % 2 == 0 for x in nums]", "(x**2 for x in nums while x % 2 == 0)"],
        answer: 1,
        explanation: "`[x**2 for x in nums if x % 2 == 0]` calculates `x**2` for every item where `x % 2 == 0`."
      },
      {
        id: 42,
        question: "What block always executes in a try...except...finally construct, regardless of exceptions?",
        options: ["try", "except", "finally", "else"],
        answer: 2,
        explanation: "The `finally` block runs unconditionally, ideal for cleanup and closing resource handles."
      },
      {
        id: 43,
        question: "Which exception is raised when dividing any number by zero?",
        options: ["NullDivisionError", "ArithmeticFault", "ZeroDivisionError", "MathError"],
        answer: 2,
        explanation: "Python raises `ZeroDivisionError` on division or modulo operations with a zero divisor."
      },
      {
        id: 44,
        question: "What happens in a try...except block if no exception occurs?",
        options: ["The except block runs anyway", "The else block (if provided) runs", "The program crashes", "Python restarts"],
        answer: 1,
        explanation: "The `else` clause in exception handling runs only when the `try` block executed with zero errors."
      },
      {
        id: 45,
        question: "How do you manually trigger an exception in Python?",
        options: ["throw ValueError(\"Invalid input\")", "raise ValueError(\"Invalid input\")", "catch ValueError(\"Invalid input\")", "fire ValueError(\"Invalid input\")"],
        answer: 1,
        explanation: "Python uses `raise` to intentionally trigger an exception."
      }
    ]
  },

  {
    day: 10,
    phase: 2,
    phaseTitle: 'Phase 2: Collections, Functions & Architecture',
    title: 'Day 10: Milestone Checkpoint 2 — OOP & File Persistence',
    unit: 'Phase 2: Collections, Functions & Architecture',
    topic: 'Object-Oriented Programming (classes, objects, __init__, methods, inheritance) and file I/O.',
    estimatedTime: 45,
    xpReward: 150,
    isMilestone: true,
    badgeAward: 'Python Architect 🏆',
    videoSource: {
      platform: 'YouTube',
      instructor: 'Bro Code (Python Full Course)',
      timestamp: '06:00:00 – 06:45:00',
      url: 'https://www.youtube.com/watch?v=ix9cRaBkVe0&t=21600s'
    },
    whatToLearn: {
      summary: 'Design classes with `__init__`, instance methods, properties, inheritance, and save data to files using context managers (`with open`).',
      details: [
        '`class HabitTracker:` encapsulates state and behaviors together.',
        '`__init__(self, ...)` initializes newly created instances.',
        'File I/O: `with open("habits.txt", "w") as f:` ensures safe automatic closing.',
        'Milestone Checkpoint: Completing Day 10 unlocks your Python Architect Badge.'
      ],
      codeExample: `# OOP Habit Tracker Class
class User:
    def __init__(self, username: str, streak: int = 0):
        self.username = username
        self.streak = streak
        self.xp = streak * 50

    def record_day(self):
        self.streak += 1
        self.xp += 50

    def to_csv_line(self) -> str:
        return f"{self.username},{self.streak},{self.xp}\\n"

user = User("Aman", 5)
user.record_day()
print(f"User: {user.username} | Streak: {user.streak} | XP: {user.xp}")`
    },
    tasks: [
      { id: 'p10_t1', text: 'Create a User class with attributes username, streak, xp and a record_day() method', completed: false },
      { id: 'p10_t2', text: 'Implement a subclass PremiumUser that earns 2x XP per completed day', completed: false },
      { id: 'p10_t3', text: 'Pass milestone checkpoint to earn the Python Architect 🏆 Badge', completed: false }
    ],
    starterCode: `# Day 10 Milestone: OOP Architecture Challenge
# ---------------------------------------------

# TODO 1: Create a HabitUser class with __init__ and complete_day() method
class HabitUser:
    def __init__(self, username: str, streak: int = 1):
        self.username = username
        self.streak = streak
        self.xp = streak * 50

    def complete_day(self):
        self.streak += 1
        self.xp += 50

# TODO 2: Create a ProUser subclass that earns 2x bonus XP per day
class ProUser(HabitUser):
    def complete_day(self):
        self.streak += 1
        self.xp += 100 # 2x bonus

# Instantiate users and record daily progress:
u1 = HabitUser("Aman", 5)
u1.complete_day()

u2 = ProUser("Sarah", 5)
u2.complete_day()

# Print results:
print(f"Standard User: {u1.username} -> Streak: {u1.streak}, XP: {u1.xp}")
print(f"Pro User: {u2.username} -> Streak: {u2.streak}, XP: {u2.xp}")
`,
    expectedKeyword: "Standard User: Aman",
    mcqQuestions: [
      {
        id: 46,
        question: "What is the standard constructor method name for initializing objects in a class?",
        options: ["__construct__()", "__init__()", "__new__()", "__class__()"],
        answer: 1,
        explanation: "`__init__()` is the initializer method automatically invoked when instantiating a new object."
      },
      {
        id: 47,
        question: "What does the self parameter represent inside an instance method?",
        options: ["The class itself", "The current instance of the class", "A global namespace", "The parent superclass"],
        answer: 1,
        explanation: "`self` represents the specific object instance calling the method, allowing access to its attributes."
      },
      {
        id: 48,
        question: "Why is with open(\"log.txt\", \"w\") as f: preferred over f = open(...) ?",
        options: ["It runs faster in memory", "It automatically closes the file even if errors occur", "It encrypts the file", "It opens the file in read mode only"],
        answer: 1,
        explanation: "Context managers (`with`) guarantee that the file stream is closed safely even if exceptions arise."
      },
      {
        id: 49,
        question: "Which mode opens a file for writing without overwriting existing content?",
        options: ["\"w\"", "\"r+\"", "\"a\" (append)", "\"x\""],
        answer: 2,
        explanation: "Mode `\"a\"` (append) writes new data at the end of the file without wiping existing text."
      },
      {
        id: 50,
        question: "How does a child class Student inherit from parent class Person?",
        options: ["class Student extends Person:", "class Student(Person):", "class Student implements Person:", "class Student: inherits Person"],
        answer: 1,
        explanation: "Inheritance syntax in Python places the parent class in parentheses after the class name: `class Student(Person):`."
      }
    ]
  },

  // ==========================================
  // PHASE 3: MODERN AI TOOLING & LLM INTEGRATION (DAYS 11–15)
  // ==========================================
  {
    day: 11,
    phase: 3,
    phaseTitle: 'Phase 3: Modern AI Tooling & LLM Integration',
    title: 'Day 11: Modern Workflow, Virtual Envs & Dependencies',
    unit: 'Phase 3: Modern AI Tooling & LLM Integration',
    topic: 'Modern project setup: python -m venv, pip, requirements.txt, and .env security.',
    estimatedTime: 30,
    xpReward: 120,
    videoSource: {
      platform: 'YouTube',
      instructor: 'Dave Ebbelaar (Python for AI & APIs)',
      timestamp: '00:00:00 – 00:45:00',
      url: 'https://www.youtube.com/watch?v=ygXn5nV5qFc&t=0s'
    },
    whatToLearn: {
      summary: 'Transition to modern AI software engineering: create isolated virtual environments, manage package dependencies with pip, and protect API keys with python-dotenv.',
      details: [
        'Virtual Environments isolate dependencies: `python -m venv .venv`.',
        'Activation: `source .venv/bin/activate` (Mac/Linux) or `.venv\\Scripts\\activate` (Windows).',
        'Requirements management: `pip freeze > requirements.txt` and `pip install -r requirements.txt`.',
        'Security Best Practice: never commit `.env` containing API keys to GitHub.'
      ],
      codeExample: `# Modern AI Project Environment Config
import os

# Simulating environment loading with python-dotenv
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "sk-mock-key-12345")
ENV = os.getenv("APP_ENV", "development")

print(f"Environment: {ENV}")
print(f"Key configured: {OPENAI_API_KEY[:7]}... (Secured)")`
    },
    tasks: [
      { id: 'p11_t1', text: 'Create and activate a Python virtual environment (.venv)', completed: false },
      { id: 'p11_t2', text: 'Install requests, pandas, and python-dotenv and generate requirements.txt', completed: false },
      { id: 'p11_t3', text: 'Simulate reading API keys securely from environment variables (os.getenv)', completed: false }
    ],
    starterCode: `# Day 11: Environment & Config Challenge
# ---------------------------------------

# TODO 1: Set up simulated environment configuration dictionary
env_vars = {
    "APP_ENV": "development",
    "API_MODEL": "gpt-4o-mini",
    "MAX_TOKENS": "1000"
}

# TODO 2: Extract environment values safely with .get() and cast numeric limits to int
model = env_vars.get("API_MODEL")
tokens = int(env_vars.get("MAX_TOKENS"))

# Print initialization report:
print(f"Project Initialized on {env_vars.get('APP_ENV')}")
print(f"Target AI Model: {model} (Max Tokens: {tokens})")
`,
    expectedKeyword: "Project Initialized",
    mcqQuestions: [
      {
        id: 51,
        question: "What command creates a virtual environment named .venv using the standard library?",
        options: ["python -m venv .venv", "pip create .venv", "python init venv", "npm init venv"],
        answer: 0,
        explanation: "`python -m venv .venv` creates an isolated virtual environment directory using Python's built-in `venv` module."
      },
      {
        id: 52,
        question: "How do you activate .venv in a Windows PowerShell terminal?",
        options: ["source .venv/bin/activate", ".venv\\Scripts\\Activate.ps1", "python activate .venv", "start .venv"],
        answer: 1,
        explanation: "On Windows PowerShell, virtual environments are activated via `.venv\\Scripts\\Activate.ps1`."
      },
      {
        id: 53,
        question: "How do you export all installed packages and versions to a file?",
        options: ["pip export > requirements.txt", "pip list --save requirements.txt", "pip freeze > requirements.txt", "python -m pip dump"],
        answer: 2,
        explanation: "`pip freeze > requirements.txt` outputs exact package versions suitable for reproducible installations."
      },
      {
        id: 54,
        question: "Why should API keys never be hardcoded directly into scripts?",
        options: ["Hardcoded keys make the Python interpreter run slower", "Risk of leaking secrets publicly when pushing to Git repositories", "Python cannot parse string keys longer than 32 characters", "Hardcoded keys expire after 24 hours"],
        answer: 1,
        explanation: "Hardcoded credentials get exposed to source control and bots. Always keep secrets in `.env` files."
      },
      {
        id: 55,
        question: "Which library is standard for loading .env file variables into Python?",
        options: ["python-dotenv", "env-loader", "secret-py", "dotenv-reader"],
        answer: 0,
        explanation: "`python-dotenv` with `load_dotenv()` reads key-value pairs from a `.env` file into `os.environ`."
      }
    ]
  },

  {
    day: 12,
    phase: 3,
    phaseTitle: 'Phase 3: Modern AI Tooling & LLM Integration',
    title: 'Day 12: Working with External Data & REST APIs',
    unit: 'Phase 3: Modern AI Tooling & LLM Integration',
    topic: 'HTTP GET/POST requests, status codes, JSON parsing with requests library, and error handling.',
    estimatedTime: 35,
    xpReward: 120,
    videoSource: {
      platform: 'YouTube',
      instructor: 'Dave Ebbelaar (Python for AI & APIs)',
      timestamp: '00:45:00 – 01:45:00',
      url: 'https://www.youtube.com/watch?v=ygXn5nV5qFc&t=2700s'
    },
    whatToLearn: {
      summary: 'Fetch live external web data with the requests library, inspect HTTP status codes (200, 404, 500), and parse nested JSON payloads into Python dictionaries.',
      details: [
        '`requests.get(url)` sends HTTP GET requests to REST endpoints.',
        '`response.json()` deserializes JSON string payloads into Python dicts/lists.',
        '`response.raise_for_status()` raises exceptions for 4xx/5xx error codes.',
        'Data extraction: navigate nested JSON response keys.'
      ],
      codeExample: `# Fetching & Parsing Mock API Data
mock_api_response = {
    "status": 200,
    "user": "Aman",
    "completed_days": 12,
    "metrics": {"total_xp": 1450, "streak": 12}
}

if mock_api_response["status"] == 200:
    metrics = mock_api_response["metrics"]
    print(f"User: {mock_api_response['user']} | Total XP: {metrics['total_xp']} | Streak: {metrics['streak']}")`
    },
    tasks: [
      { id: 'p12_t1', text: 'Make an HTTP GET request to a public API endpoint using requests', completed: false },
      { id: 'p12_t2', text: 'Parse the response JSON into Python dictionaries and extract specific fields', completed: false },
      { id: 'p12_t3', text: 'Handle HTTP errors with response.raise_for_status() and try-except', completed: false }
    ],
    starterCode: `# Day 12: REST APIs & JSON Challenge
# -----------------------------------

# TODO 1: Inspect mock API response dictionary
mock_weather_api = {
    "city": "San Francisco",
    "temperature": 18.5,
    "conditions": "Partly Cloudy",
    "aqi": 35
}

# TODO 2: Extract city, temperature, and conditions fields
city = mock_weather_api["city"]
temp = mock_weather_api["temperature"]
status = mock_weather_api["conditions"]

# Print formatted weather report:
print(f"Weather Report for {city}:")
print(f"  Temp: {temp}°C | Conditions: {status}")
`,
    expectedKeyword: "Weather Report for San Francisco",
    mcqQuestions: [
      {
        id: 56,
        question: "Which HTTP method is primarily used to fetch data from an endpoint?",
        options: ["POST", "PUT", "GET", "DELETE"],
        answer: 2,
        explanation: "`GET` is the standard HTTP method used for retrieving representations of resources."
      },
      {
        id: 57,
        question: "Using the requests library, how do you parse the response body as JSON?",
        options: ["response.to_json()", "response.json()", "json.parse(response)", "response.data"],
        answer: 1,
        explanation: "`response.json()` automatically decodes the JSON payload into Python dictionaries or lists."
      },
      {
        id: 58,
        question: "What does HTTP status code 200 signify?",
        options: ["Unauthorized", "Resource Not Found", "Internal Server Error", "Success / OK"],
        answer: 3,
        explanation: "HTTP `200 OK` indicates that the request succeeded."
      },
      {
        id: 59,
        question: "What does response.raise_for_status() do?",
        options: ["Returns the status code as an int", "Raises an HTTPError if the response was an HTTP 4xx or 5xx error", "Forces the request to retry 3 times", "Closes the HTTP connection"],
        answer: 1,
        explanation: "`raise_for_status()` raises a `requests.exceptions.HTTPError` if the response was unsuccessful (4xx/5xx)."
      },
      {
        id: 60,
        question: "What format is JSON most similar to in Python syntax?",
        options: ["Sets of tuples", "Dictionaries and lists", "Raw binary bytes", "Classes and methods"],
        answer: 1,
        explanation: "JSON maps directly to nested Python dictionaries (objects `{}`) and lists (arrays `[]`)."
      }
    ]
  },

  {
    day: 13,
    phase: 3,
    phaseTitle: 'Phase 3: Modern AI Tooling & LLM Integration',
    title: 'Day 13: Data Parsing & Processing with Pandas',
    unit: 'Phase 3: Modern AI Tooling & LLM Integration',
    topic: 'Pandas DataFrames, reading CSVs, filtering columns, cleaning missing data, and summary statistics.',
    estimatedTime: 40,
    xpReward: 120,
    videoSource: {
      platform: 'YouTube',
      instructor: 'Dave Ebbelaar (Python for AI & APIs)',
      timestamp: '01:45:00 – 02:45:00',
      url: 'https://www.youtube.com/watch?v=ygXn5nV5qFc&t=6300s'
    },
    whatToLearn: {
      summary: 'Load tabular data into Pandas DataFrames, filter rows with boolean conditions, calculate group aggregates, and clean missing values before feeding to LLMs.',
      details: [
        'Pandas `pd.read_csv("data.csv")` loads tabular datasets into DataFrames.',
        'Filtering: `df[df["streak"] >= 5]` selects matching rows.',
        'Aggregations: `.mean()`, `.sum()`, `.describe()`, `.groupby()`.',
        'Data Prep for AI: prepare concise summary tables for prompt context injection.'
      ],
      codeExample: `# Pandas DataFrame Simulation
dataset = [
    {"user": "Alex", "day": 1, "score": 95, "xp": 100},
    {"user": "Sara", "day": 1, "score": 85, "xp": 100},
    {"user": "Alex", "day": 2, "score": 90, "xp": 100},
    {"user": "David", "day": 1, "score": 70, "xp": 100}
]

total_xp = sum(row["xp"] for row in dataset)
high_scorers = [r for r in dataset if r["score"] >= 90]

print(f"Total XP Generated: {total_xp}")
print(f"High Score Events: {len(high_scorers)}")`
    },
    tasks: [
      { id: 'p13_t1', text: 'Load a CSV dataset into a Pandas DataFrame using pd.read_csv()', completed: false },
      { id: 'p13_t2', text: 'Filter the DataFrame for entries where score > 80 and calculate the average score', completed: false },
      { id: 'p13_t3', text: 'Format aggregated summary statistics into a clean prompt context string', completed: false }
    ],
    starterCode: `# Day 13: Tabular Data Processing Challenge
# ------------------------------------------

# TODO 1: Process tabular dataset of habit logs
habits_data = [
    {"day": 1, "habit": "Python Coding", "completed": True, "mins": 45},
    {"day": 2, "habit": "Python Coding", "completed": True, "mins": 50},
    {"day": 3, "habit": "Python Coding", "completed": True, "mins": 60},
    {"day": 4, "habit": "Gym Workout", "completed": True, "mins": 75}
]

# TODO 2: Calculate aggregate total minutes and filter Python sessions
total_minutes = sum(d["mins"] for d in habits_data)
coding_sessions = [d for d in habits_data if "Python" in d["habit"]]

# Print aggregated summary statistics:
print(f"Total Learning & Habit Minutes: {total_minutes} mins")
print(f"Python Coding Sessions: {len(coding_sessions)}")
`,
    expectedKeyword: "Total Learning & Habit Minutes",
    mcqQuestions: [
      {
        id: 61,
        question: "What is the primary 2-dimensional tabular data structure in Pandas?",
        options: ["Series", "DataFrame", "DataMatrix", "TableSet"],
        answer: 1,
        explanation: "A Pandas `DataFrame` is the standard 2D labeled tabular data structure with columns of potentially different types."
      },
      {
        id: 62,
        question: "How do you read a CSV file named habits.csv into a DataFrame df?",
        options: ["df = pd.open_csv(\"habits.csv\")", "df = pd.read_csv(\"habits.csv\")", "df = pd.load(\"habits.csv\")", "df = pd.parse_csv(\"habits.csv\")"],
        answer: 1,
        explanation: "`pd.read_csv(\"filename.csv\")` reads comma-separated values into a DataFrame."
      },
      {
        id: 63,
        question: "How do you filter df to only rows where column \"xp\" is greater than 100?",
        options: ["df.filter(\"xp > 100\")", "df[df[\"xp\"] > 100]", "df.where(xp > 100)", "df.select(\"xp > 100\")"],
        answer: 1,
        explanation: "`df[df[\"xp\"] > 100]` uses boolean indexing to return matching rows."
      },
      {
        id: 64,
        question: "What does df.head() do by default?",
        options: ["Displays the first 5 rows", "Displays the column headers only", "Displays summary statistics", "Sorts the DataFrame descending"],
        answer: 0,
        explanation: "`df.head(n=5)` returns the first 5 rows of the DataFrame."
      },
      {
        id: 65,
        question: "Which method displays statistical summary (mean, count, std, min, max) of numeric columns?",
        options: ["df.summary()", "df.info()", "df.describe()", "df.stats()"],
        answer: 2,
        explanation: "`df.describe()` outputs summary statistics including count, mean, std, min, and quartiles."
      }
    ]
  },

  {
    day: 14,
    phase: 3,
    phaseTitle: 'Phase 3: Modern AI Tooling & LLM Integration',
    title: 'Day 14: Integrating LLMs (API Calls & Structured Prompts)',
    unit: 'Phase 3: Modern AI Tooling & LLM Integration',
    topic: 'Calling LLM endpoints, temperature, system/user roles, prompt formatting, and structured JSON outputs.',
    estimatedTime: 40,
    xpReward: 150,
    videoSource: {
      platform: 'YouTube',
      instructor: 'Dave Ebbelaar (Python for AI & APIs)',
      timestamp: '02:45:00 – 03:45:00',
      url: 'https://www.youtube.com/watch?v=ygXn5nV5qFc&t=9900s'
    },
    whatToLearn: {
      summary: 'Call Large Language Model (LLM) APIs, configure system personas, user messages, temperature for deterministic outputs, and enforce structured JSON responses.',
      details: [
        'Message roles: `system` (rules & persona), `user` (task/input), `assistant` (history).',
        '`temperature`: 0.0 (deterministic/code) to 1.0 (creative/brainstorming).',
        'Structured Outputs: request JSON schemas to parse AI responses safely.',
        'Token management: monitor token limits and latency.'
      ],
      codeExample: `# Simulating an LLM API Call with System Rules
messages = [
    {"role": "system", "content": "You are DevQuik AI Tutor. Respond strictly in JSON format."},
    {"role": "user", "content": "Explain Python list comprehensions in 1 sentence."}
]

# Simulated Structured Output
ai_response = {
    "concept": "List Comprehension",
    "explanation": "A concise syntax to generate and transform lists in a single readable line.",
    "syntax": "[expr for x in iterable if condition]"
}

print(f"AI Concept: {ai_response['concept']}")
print(f"Summary: {ai_response['explanation']}")`
    },
    tasks: [
      { id: 'p14_t1', text: 'Formulate structured messages payload with system, user, and assistant roles', completed: false },
      { id: 'p14_t2', text: 'Configure temperature (0.0 vs 0.7) and observe response determinism', completed: false },
      { id: 'p14_t3', text: 'Parse an AI JSON response and extract clean structured fields into Python objects', completed: false }
    ],
    starterCode: `# Day 14: LLM API Integration & Prompts Challenge
# ------------------------------------------------

# TODO 1: Define system prompt role and user input
system_prompt = "You are a Python AI Mentor. Analyze the user habit log and return recommendations in JSON."
user_log = "Habit: 14-day Python streak completed, 45 mins daily."

# TODO 2: Build the messages payload with system and user roles
payload = {
    "model": "gpt-4o-mini",
    "temperature": 0.2,
    "messages": [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_log}
    ]
}

# Print configuration details:
print(f"Model Config: {payload['model']} (temp={payload['temperature']})")
print(f"System Role: {payload['messages'][0]['content']}")
print(f"Prompt Ready for API Transmission.")
`,
    expectedKeyword: "Model Config: gpt-4o-mini",
    mcqQuestions: [
      {
        id: 66,
        question: "In LLM APIs, what is the purpose of the \"system\" message role?",
        options: ["To pass the user's immediate input question", "To define behavior, rules, persona, and output format constraints", "To provide user authentication credentials", "To measure network latency"],
        answer: 1,
        explanation: "The `system` prompt sets the high-level instructions, role, constraints, and behavior for the model."
      },
      {
        id: 67,
        question: "What effect does setting LLM temperature = 0.0 have?",
        options: ["Makes responses more random and creative", "Makes responses deterministic and focused", "Increases response streaming speed", "Limits maximum output tokens to zero"],
        answer: 1,
        explanation: "Temperature controls randomness; `0.0` yields the most deterministic and focused outputs."
      },
      {
        id: 68,
        question: "When building an app that programmatically parses LLM outputs, what format is ideal to enforce?",
        options: ["Markdown bullets", "Valid JSON schema", "Plain raw text", "CSV string"],
        answer: 1,
        explanation: "Valid JSON schema enables reliable programmatic parsing into application data models."
      },
      {
        id: 69,
        question: "What does output token streaming allow you to do in a user interface?",
        options: ["Display tokens progressively as generated instead of waiting for the full response", "Reduce API token consumption by half", "Bypass API rate limits", "Automatically translate output to multiple languages"],
        answer: 0,
        explanation: "Streaming yields tokens as they are generated by the model, reducing perceived latency in UIs."
      },
      {
        id: 70,
        question: "Which parameter limits the maximum length of the generated LLM response?",
        options: ["max_tokens", "stop_length", "token_cap", "timeout"],
        answer: 0,
        explanation: "`max_tokens` limits the maximum number of output tokens generated in the response."
      }
    ]
  },

  {
    day: 15,
    phase: 3,
    phaseTitle: 'Phase 3: Modern AI Tooling & LLM Integration',
    title: 'Day 15: Capstone Project — Context-Aware AI Terminal Assistant',
    unit: 'Phase 3: Modern AI Tooling & LLM Integration',
    topic: 'Capstone: Context-aware AI CLI Agent injecting personal habit stats, dynamic prompts, and streaming responses.',
    estimatedTime: 50,
    xpReward: 200,
    isMilestone: true,
    badgeAward: 'AI Engineer Level 1 🎓',
    videoSource: {
      platform: 'YouTube',
      instructor: 'Dave Ebbelaar (Python for AI & APIs)',
      timestamp: '03:45:00 – 05:00:00',
      url: 'https://www.youtube.com/watch?v=ygXn5nV5qFc&t=13500s'
    },
    whatToLearn: {
      summary: 'Build the Capstone Context-Aware AI Assistant: combine Pandas data processing, prompt grounding, conversation history memory, and LLM completions into an interactive terminal assistant.',
      details: [
        'Context Grounding (RAG basics): Inject tabular summary stats into the LLM system prompt.',
        'Conversation Loop: maintain continuous multi-turn chat history.',
        'Graceful Exit: support exit/quit commands and error recovery.',
        'AI Certification: Completing Day 15 unlocks your official AI Engineer Level 1 Certificate.'
      ],
      codeExample: `# Capstone AI Assistant Architecture
class DevQuikAIAssistant:
    def __init__(self, username: str, user_stats: dict):
        self.username = username
        self.history = [
            {"role": "system", "content": f"You are DevQuik AI Coach for {username}. User Stats: {user_stats}."}
        ]

    def ask(self, query: str) -> str:
        self.history.append({"role": "user", "content": query})
        # Generate grounded reply
        reply = f"Coach: {self.username}, with your 15-day streak and {self.history[-1]['content']} focus, you're ready for advanced AI workflows!"
        self.history.append({"role": "assistant", "content": reply})
        return reply

assistant = DevQuikAIAssistant("Aman", {"streak": 15, "xp": 1850})
print(assistant.ask("What should I build next?"))`
    },
    tasks: [
      { id: 'p15_t1', text: 'Build an AIAssistant class with conversation memory (messages list)', completed: false },
      { id: 'p15_t2', text: 'Ground the AI responses by injecting personalized user progress context into system prompt', completed: false },
      { id: 'p15_t3', text: 'Pass all 3 criteria to complete the 15-Day Fast-Track and claim your AI Engineer Level 1 Certificate 🎓', completed: false }
    ],
    starterCode: `# Day 15 Capstone: Context-Aware AI Assistant Challenge
# ------------------------------------------------------

# TODO 1: Build an AIAssistant class maintaining conversation memory in self.messages
class AIAssistant:
    def __init__(self, user_name: str, streak: int, xp: int):
        self.user = user_name
        self.streak = streak
        self.xp = xp
        self.messages = [
            {"role": "system", "content": f"You are an AI Mentor for {user_name}. Current streak: {streak} days, Total XP: {xp}."}
        ]

    # TODO 2: Implement generate_response to append user prompt and return grounded reply
    def generate_response(self, user_prompt: str) -> str:
        self.messages.append({"role": "user", "content": user_prompt})
        response = f"Mentor: Excellent progress, {self.user}! With {self.streak} days completed, you have unlocked Python & AI fundamentals."
        self.messages.append({"role": "assistant", "content": response})
        return response

# Instantiate and test your AI Assistant:
bot = AIAssistant("Aman", streak=15, xp=1850)
print(bot.generate_response("How do I deploy my first AI agent?"))
print("🎉 15-Day Python to AI Fast-Track Capstone Initialized!")
`,
    expectedKeyword: "15-Day Python to AI Fast-Track Capstone",
    mcqQuestions: [
      {
        id: 71,
        question: "How do you preserve conversational memory when making sequential LLM API calls?",
        options: ["The LLM server automatically stores all past chats by IP address", "Append previous user prompts and assistant replies into a running messages list", "Send only the latest prompt and let the model infer previous turns", "Store history in browser cookies only"],
        answer: 1,
        explanation: "LLM APIs are stateless. Multi-turn memory requires appending previous turns to the `messages` array in each call."
      },
      {
        id: 72,
        question: "What is \"context injection\" (RAG / prompt grounding)?",
        options: ["Fine-tuning the foundation model weights every time a user chats", "Passing relevant external or tabular data directly inside the prompt context", "Overclocking CPU during inference", "Injecting SQL scripts into the database"],
        answer: 1,
        explanation: "Context injection (prompt grounding) supplies domain-specific or live tabular data within the prompt."
      },
      {
        id: 73,
        question: "What risk occurs if you blindly dump an entire huge CSV into an LLM prompt?",
        options: ["Context window token limit exceeded and increased API cost", "Python interpreter stack overflow", "The file gets permanently deleted from disk", "The API converts the CSV into an image"],
        answer: 0,
        explanation: "Dumping massive raw data can exceed model context limits, dilute relevance, and cause high token costs."
      },
      {
        id: 74,
        question: "Before passing tabular data to an LLM prompt, what should you do first?",
        options: ["Clean, filter, or aggregate the data with Pandas to send only relevant information", "Encrypt the data with AES-256", "Convert all numbers to Roman numerals", "Duplicate each row for redundancy"],
        answer: 0,
        explanation: "Pre-processing and aggregating data with Pandas minimizes token usage and improves LLM response precision."
      },
      {
        id: 75,
        question: "In an interactive CLI loop, what is the best way to let the user exit cleanly?",
        options: ["Wait for the computer to shut down", "Check if user_input.strip().lower() in ['exit', 'quit'] and break the loop", "Unplug the keyboard", "Raise an unhandled SystemError"],
        answer: 1,
        explanation: "Checking for keyword sentinels like `exit` or `quit` enables clean and graceful loop termination."
      }
    ]
  }
];
