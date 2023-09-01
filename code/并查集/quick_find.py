class UnionSet:
    def __init__(self, n):
        """

        """
        self.n = n
        self.color = [
            i for i in range(n+1)
        ]

    def find(self, x):
        return self.color[x]

    def merge(self, a, b):
        if self.color[a] == self.color[b]:
            return
        color_b = self.color(b)
        for i in range(self.n+1):
            if self.color[i] == color_b:
                self.color[i] = self.color[a]
        return
