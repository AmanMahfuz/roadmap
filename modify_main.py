import re

with open('src/main.jsx', 'r') as f:
    content = f.read()

content = content.replace("import App from './App.jsx'", "import App from './App.jsx'\nimport { AppProvider } from './contexts/AppContext'")
content = content.replace("<App />", "<AppProvider>\n      <App />\n    </AppProvider>")

with open('src/main.jsx', 'w') as f:
    f.write(content)
