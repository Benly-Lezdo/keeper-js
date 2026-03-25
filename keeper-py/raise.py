# Without raise, the exception would be silently swallowed, and the caller would think everything worked fine.


# example =>  1 without raise
def test():
    try:
        x = 3 / 0
        print(x)
    except Exception as e:
        print("Error occurred:", e)


test()


# example =>  1 without raise
def sample():
    try:
        x = 3 / 0
        print(x)
    except Exception as e:
        print("Error occurred:", e)
        raise


sample()
