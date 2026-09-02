import re

with open('src/components/DayTaskWindow.jsx', 'r') as f:
    content = f.read()

# 1. Remove isNextDayLocked logic
content = re.sub(
    r'const isNextDayLocked = !isCompleted && \(!allTasksCompleted \|\| !hasPassedCodingChallenge\);',
    'const isNextDayLocked = false; // removed constraint',
    content
)

# 2. Modify handleNextDayClick early return
content = re.sub(
    r'if \(isNextDayLocked\) \{.*?\n.*?alert\(.*?\);\n.*?return;\n.*?\}',
    'if (isNextDayLocked) {\n      return;\n    }',
    content,
    flags=re.DOTALL
)

# 3. Enable the "Complete & Next Day" button unconditionally
content = re.sub(
    r'disabled=\{!allTasksCompleted \|\| !hasPassedCodingChallenge\}',
    'disabled={false}',
    content
)

# 4. Fix the styling of the Complete button to always look enabled
content = re.sub(
    r'allTasksCompleted && hasPassedCodingChallenge\n.*?(\? .*?)\n.*?: (\'.*?\')',
    r'true \n                      \1 \n                      : \2',
    content
)

# 5. Fix the text of the Complete button
content = re.sub(
    r'<span>\{isCompleted \? `Update & Next Day` : \(!allTasksCompleted \? `Tasks Incomplete` : \(!hasPassedCodingChallenge \? `Pass 1 Lab to Unlock` : `Complete \(\+200 XP\) & Next`\)\)\}</span>',
    '<span>{isCompleted ? `Update & Next Day` : `Complete (+200 XP) & Next`}</span>',
    content
)

# 6. Remove MCQ Quiz Tab entirely if user wants it gone. 
# "remove all other constrains like quiz other remove only from vibe coding"
# Let's remove the MCQ Quiz button from the tabs.
content = re.sub(
    r'\{mcqs\.length > 0 && \(\n.*?<button\n.*?onClick=\{\(\) => setActiveTab\(\'mcq\'\)\}.*?\n.*?</button>\n.*?\}',
    '',
    content,
    flags=re.DOTALL
)

# 7. Also remove the MCQ Quiz tab content area
content = re.sub(
    r'\{\/\* TAB 3: MCQ Quiz Assessment \*\/\}.*?activeTab === \'mcq\' && \(.*?\n\s+\)\}',
    '{/* TAB 3: MCQ Quiz Assessment REMOVED */}',
    content,
    flags=re.DOTALL
)

# 8. Remove from the "Check off all tasks above to claim XP & advance!" section
content = re.sub(
    r'\{\!allTasksCompleted\s*\n\s*\?\s*\'Check off all tasks above to claim XP & advance!\'\s*\n\s*\:\s*\!hasPassedCodingChallenge\s*\n\s*\?\s*\'⚠️ Tasks done! Now pass at least 1 Terminal Lab to unlock the next day.\'\s*\n\s*\:\s*\'🎉 All requirements met!\'\}',
    "{'🎉 All requirements met!'}",
    content,
    flags=re.DOTALL
)

with open('src/components/DayTaskWindow.jsx', 'w') as f:
    f.write(content)
