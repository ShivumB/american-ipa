import io

f1 = io.open("transcribed_words.csv", encoding="utf-8", mode="r")
f2 = io.open("common_words.csv", encoding="utf-8", mode="r")

output = io.open("most_common_transcribed_words.csv", encoding="utf-8", mode="a")

for line in f1:
    temp = line.split(",")

    print(temp[0])
    
    f2.seek(0)
    for common_word in f2:
        if(common_word.rstrip() == temp[0]):
            output.write(temp[0] + "," + temp[1])

f1.close()
f2.close()
output.close()