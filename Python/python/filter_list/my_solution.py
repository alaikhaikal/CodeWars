# filter list item where's include string type
def filter_list(item):
    return [x for x in item if type(x) is int]


filter_list([1, 2, '2', 'new', 4, 6])
