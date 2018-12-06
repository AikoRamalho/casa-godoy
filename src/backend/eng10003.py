def read_file(fileName):
    file = open(fileName, 'r')
    data = []
    for line in file:
        line = line.strip()
        line = float(line)*(3.14)*(1.44)*(1.44)*1000
        line = round(line, 2)
        data.append(line)
    file.close()
    return data

def generate_water_list(datalist):
    waterData = []
    for i in range(len(datalist)):
        count = 0
        for j in range(i+1):
            count+=datalist[j]
        waterData.append(count)
    return waterData

def generate_water_saving(totalWater):
    savings = []
    for i in range(len(totalWater)):
        save = totalWater[i]*0.00224
        savings.append(round(save, 2))
    return savings

def generate_json(waterUntilNow, savings, waterNow):
    file = open('tst.json', 'w')
    file.write('{\n')
    file.write('\t'+'"dinheiro":[\n')
    for i in range(len(savings)):
        if(i+1!=len(savings)):
            file.write('\t\t{"x": ')
            file.write(str(i+1))
            file.write(', ')
            file.write('"y": ')
            file.write(str(savings[i]))
            file.write('},\n')
        else:
            file.write('\t\t{"x": ')
            file.write(str(i+1))
            file.write(', ')
            file.write('"y": ')
            file.write(str(savings[i]))
            file.write('}\n')
            file.write('\t],\n')
    file.write('\t"agua":[\n')
    for i in range(len(waterUntilNow)):
        if(i+1!=len(waterUntilNow)):
            file.write('\t\t{"x": ')
            file.write(str(i+1))
            file.write(', ')
            file.write('"y": ')
            file.write(str(round(waterUntilNow[i]/1000,2)))
            file.write('},\n')
        else:
            file.write('\t\t{"x": ')
            file.write(str(i+1))
            file.write(', ')
            file.write('"y": ')
            file.write(str(round(waterUntilNow[i]/1000,2)))
            file.write('}\n')
            file.write('\t],\n')
    file.write('\t"atual": ')
    file.write(str(waterNow)+'\n')
    file.write('}')
    file.close()

volumeData = read_file('dados.txt')

waterUntilNow = generate_water_list(volumeData)

savings = generate_water_saving(waterUntilNow)

waterNow = volumeData[-1]
generate_json(waterUntilNow, savings, waterNow)
