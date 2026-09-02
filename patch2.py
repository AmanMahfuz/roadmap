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
content = content.replace(
    'disabled={!allTasksCompleted || !hasPassedCodingChallenge}',
    'disabled={false}'
)

# 4. Fix styling of Complete button
content = content.replace(
    'allTasksCompleted && hasPassedCodingChallenge',
    'true'
)

# 5. Fix text of Complete button
content = content.replace(
    '<span>{isCompleted ? `Update & Next Day` : (!allTasksCompleted ? `Tasks Incomplete` : (!hasPassedCodingChallenge ? `Pass 1 Lab to Unlock` : `Complete (+200 XP) & Next`))}</span>',
    '<span>{isCompleted ? `Update & Next Day` : `Complete (+200 XP) & Next`}</span>'
)

# 6. Fix the "Check off all tasks above" text
content = content.replace(
    """{!allTasksCompleted 
                  ? 'Check off all tasks above to claim XP & advance!' 
                  : !hasPassedCodingChallenge 
                    ? '⚠️ Tasks done! Now pass at least 1 Terminal Lab to unlock the next day.'
                    : '🎉 All requirements met!'}""",
    "'🎉 All requirements met!'"
)

with open('src/components/DayTaskWindow.jsx', 'w') as f:
    f.write(content)
