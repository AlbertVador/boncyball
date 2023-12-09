
import numpy as np
import matplotlib.pyplot as plt
import json

with open("data.json", "r") as dataFile:
  data = json.load(dataFile)
points = data["points"]
x = [100*i for i in range(len(points))]
y = points
# for i in range(len(points)):
#   if -20<y[i]<20:
#     y[i] = 0
# for i in range(len(points)):
#   if -30<y[i]<30:
#     y[i] = 0
# for i in range(len(points)):
#   if -100<y[i]<100:
#     y[i] = 0
for i in range(len(points)):
  if -200<y[i]<200:
    y[i] = 0

plt.scatter(x, y, color='red')

# Plotting lines between the points
plt.plot(x, y, linestyle='-', color='blue')  # Connect points with lines

plt.xlabel('temps (ms)')
plt.ylabel('vitesse (m/s) mais bon pas tres vrai')
plt.title('Vitesse dimension z')
plt.grid(True)
plt.show()