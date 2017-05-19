
import os

print("git add -A")
os.system("git add -A")
update_content = raw_input("commit:")
print("git commit -m "+update_content)
os.system("git commit -m "+update_content)
print("git pull")
os.system("git pull")
print("git push")
os.system("git push")
