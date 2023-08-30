class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


class HasMap:
    def __init__(self):
        self._buckets = [None for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update_value(self, id_num, new_value):
        if not self.has(id_num):
            raise ValueError
        address = self.get_address(id_num)
        self._buckets[address].name = new_value

    # def show_bucket(self):
    #     # return self._buckets[4]
    #     return [buc for buc in self._buckets]


employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
registry = HasMap()

for id_num, name in employees:
    employee = Employee(id_num, name)
    registry.insert(employee)

print(registry.get_value(23))
print(registry.get_value(10))
registry.update_value(10, "name30")
print(registry.get_value(10))
