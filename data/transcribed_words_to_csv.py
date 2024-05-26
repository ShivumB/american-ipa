import io

f = io.open("transcribed_words.txt", mode="r", encoding="utf-8")

output = io.open("transcribed_words.csv", mode="a",encoding="utf-8")

for line in f:
    temp = line.split("/")
    output.write(temp[0].rstrip() + "," + temp[1] + "\n")


f.close()
output.close()