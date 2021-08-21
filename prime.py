def findPrimes(max):
    wList = [2] + list(range(3, max + 1 , 2))
    for number in wList:
        for divisor in range(2, int((max**0.5)) + 1):
            if number%divisor == 0 and number != divisor:
                if number in wList:
                    wList = list(filter(lambda a: a != number, wList))
    return wList

if __name__ == '__main__':
    greatest = int(input("What is the max number?\n"))
    print(f"\nThe list of primes from 0 to {greatest} is {findPrimes(greatest)}")