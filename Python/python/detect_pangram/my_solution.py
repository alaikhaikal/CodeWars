import string

# A pangram or holoalphabetic sentence is a sentence using 
# every letter of a given alphabet at least once

def is_pangram(s):
    for char in string.ascii_lowercase:
        if char not in s.lower():
            return False            
    
    return True


print(is_pangram('The quick, brown fox jumps over the lazy dog!'))
print(is_pangram('abcdefghijklmn'))