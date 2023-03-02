const employeesList = [
  { 
    city: "London",
    dateOfBirth: "1965-09-24",
    department: "Human Resources",
    firstName: "Richard",
    id: "8ycxBeuuLEtWEB4sFSRr",
    lastName: "Morgan",
    startDate: "2021-11-13",
    state: "AK",
    street: "2002 Altered Carbon St",
    zipCode: "00011",
  },
  { 
    city: "HerosCity",
    dateOfBirth: "2021-11-01",
    department: "Human Resources",
    firstName: "Sisi",
    id: "96rKSTwNAhLgElbvXSAd",
    lastName: "Lafamille",
    startDate: "2021-11-25",
    state: "KS",
    street: "007 James Bond St",
    zipCode: "00017",
  },
  { 
    city: "Motihari",
    dateOfBirth: "1903-06-25",
    department: "Sales",
    firstName: "George",
    id: "A2SReM9RXNucDCOIqHmf",
    lastName: "Orwell",
    startDate: "1950-01-21",
    state: "AK",
    street: "1949 Nineteen Eighty-Four St",
    zipCode: "00007",
  },
  { 
    city: "Paris",
    dateOfBirth: "1979-09-03",
    department: "Legal",
    firstName: "Stephane",
    id: "BXMQz15ZnWn1K0sUmSXm",
    lastName: "Doudou",
    startDate: "2021-11-06",
    state: "CO",
    street: "451 Ici St",
    zipCode: "00014",
  },
  { 
    city: "Colombo",
    dateOfBirth: "1917-12-16",
    department: "Marketing",
    firstName: "Arthur",
    id: "BhX6Yle8rZepmP3GpvO6",
    lastName: "C. Clarke",
    startDate: "2008-03-09",
    state: "AK",
    street: "1973 Rendez-vous with Rama St",
    zipCode: "00004",
  },
  {
    city: "Richland",
    dateOfBirth: "1951-08-24",
    department: "Legal",
    firstName: "Orson Scott",
    id: "DY984INUM7LflSzgsNV6",
    lastName: "Card",
    startDate: "2021-11-19",
    state: "WA",
    street: "1985 Ender's Game Av",
    zipCode: "00009",
  },
  { 
    city: "La Couvertoirade",
    dateOfBirth: "1982-08-28",
    department: "Human Resources",
    firstName: "Melanie",
    id: "GZdAgnenAO5Vcdgk8YE5",
    lastName: "Sarrouy",
    startDate: "2021-11-22",
    state: "HI",
    street: "La Blaquèrerie",
    zipCode: "00013",
  },
  { 
    city: "OufCity",
    dateOfBirth: "1918-02-12",
    department: "Human Resources",
    firstName: "Al",
    id: "I1pYYFGsG5gZqkBFBNEl",
    lastName: "Bundy",
    startDate: "2030-11-26",
    state: "TX",
    street: "145 Crazy St",
    zipCode: "00016",
  },
  { 
    city: "New York",
    dateOfBirth: "1956-06-06",
    department: "Engineering",
    firstName: "Calvin",
    id: "P9PoSjgYvwYv4ePP1632",
    lastName: "Hobbs",
    startDate: "2021-11-21",
    state: "NY",
    street: "17 Test Street",
    zipCode: "00015",
  },
  { 
    city: "Zinzintown",
    dateOfBirth: "2000-03-08",
    department: "Marketing",
    firstName: "George",
    id: "XC9neZnYoGcXH2UHanPx",
    lastName: "Delajungle",
    startDate: "2020-05-07",
    state: "CT",
    street: "3645 Main St",
    zipCode: "00016",
  },
  { 
    city: "Providence",
    dateOfBirth: "1890-08-20",
    department: "Marketing",
    firstName: "H. P.",
    id: "XXGE0yZzJ41kIyKafCn3",
    lastName: "Lovecraft",
    startDate: "1937-15-03",
    state: "RI",
    street: "1926 The Call of Cthulhu St",
    zipCode: "00010",
  },
  { 
    city: "Amiens",
    dateOfBirth: "1828-02-08",
    department: "Engineering",
    firstName: "Jules",
    id: "ZnVsjEZcQxilHPhe5mOv",
    lastName: "Verne",
    startDate: "1905-03-24",
    state: "AK",
    street: "20.000 Leagues Under the Sea Av",
    zipCode: "00002",
  },
  { 
    city: "Chicago",
    dateOfBirth: "1928-12-16",
    department: "Human Resources",
    firstName: "Philip",
    id: "eHtBWLv11zcDrcMZdhQ7",
    lastName: "K. Dick",
    startDate: "1982-03-02",
    state: "IL",
    street: "1964 Martian Time-Slip Av",
    zipCode: "00003",
  },
  { 
    city: "Tacoma",
    dateOfBirth: "1920-10-08",
    department: "Human Resources",
    firstName: "Frank",
    id: "gsEYxYmvYO8tXUW2neeo",
    lastName: "Herbert",
    startDate: "1986-02-11",
    state: "WA",
    street: "1970 Dune Av",
    zipCode: "00008",
  },
  { 
    city: "Bromley",
    dateOfBirth: "1866-09-21",
    department: "Marketing",
    firstName: "H. G.",
    id: "jDsIFIB7gCqeRGMWzLS1",
    lastName: "Wells",
    startDate: "1946-08-13",
    state: "AK",
    street: "1895 The Time Machine St",
    zipCode: "00006",
  },
  { 
    city: "Fort Meade",
    dateOfBirth: "1959-10-31",
    department: "Marketing",
    firstName: "Neal",
    id: "ji55EbrIRWW2gfmGdZXW",
    lastName: "Stephenson",
    startDate: "2021-11-13",
    state: "MD",
    street: "1991 Snow Crash St",
    zipCode: "00012",
  },
  { 
    city: "Waukegan",
    dateOfBirth: "1920-08-22",
    department: "Legal",
    firstName: "Ray",
    id: "khJgPhxZjCVZ6it79Q5N",
    lastName: "Bradbury",
    startDate: "2012-06-05",
    state: "IL",
    street: "451 Fahrenheit St",
    zipCode: "00005",
  },
  { 
    city: "Brooklyn",
    dateOfBirth: "1920-01-02",
    department: "Sales",
    firstName: "Isaac",
    id: "oUZlyqBJTE1uOT9qzJSo",
    lastName: "Asimov",
    startDate: "1992-04-06",
    state: "NY",
    street: "1951 Foundation St",
    zipCode: "00001",
  },
]

export default employeesList