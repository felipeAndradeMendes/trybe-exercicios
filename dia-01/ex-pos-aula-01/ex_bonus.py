# ex bonus 01
def find_smallest(lis):
    return min(lis)


print("Ex 01: ", find_smallest([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))


# ex-bonus 02
def triangle(n):
    counter = 1
    while counter <= n:
        print(counter * "#")
        counter += 1


triangle(5)


# ex-bonus 03
def all_sum(n):
    new_list_nums = sum(range(1, n + 1))
    return new_list_nums


print(all_sum(2))


# ex-bonus 04
def calculate_fuel_price(liters, fuel):
    gas_price = 2.50
    etanol_price = 1.90

    if fuel == "G":
        if liters > 20:
            return liters * gas_price * (1 - 0.06)
        else:
            return liters * gas_price * (1 - 0.04)
    else:
        if liters > 20:
            return liters * etanol_price * (1 - 0.05)
        else:
            return liters * etanol_price * (1 - 0.03)


print(calculate_fuel_price(30, "A"))
