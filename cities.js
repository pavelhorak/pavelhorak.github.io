var cities = [
	{
		"title": "Aarhus",
		"latitude": "56.1572",
		"longitude": "10.2107"
	},
	{
		"title": "Abu Dhabi",
		"latitude": "24.4781",
		"longitude": "54.3686"
	},
	{
		"title": "Agra",
		"latitude": "27.18",
		"longitude": "78.02"
	},
	{
		"title": "Akureyri",
		"latitude": "65.6833",
		"longitude": "-18.1"
	},
	{
		"title": "Alexandria",
		"latitude": "31.2",
		"longitude": "29.9167"
	},
	{
		"title": "Amsterdam",
		"latitude": "52.35",
		"longitude": "4.9166"
	},
	{
		"title": "Antwerp",
		"latitude": "51.2211",
		"longitude": "4.3997"
	},
	{
		"title": "Atlanta",
		"latitude": "33.7627",
		"longitude": "-84.4224"
	},
	{
		"title": "Atlantic City",
		"latitude": "39.3797",
		"longitude": "-74.4527"
	},
	{
		"title": "Auckland",
		"latitude": "-36.85",
		"longitude": "174.7833"
	},
	{
		"title": "Austin",
		"latitude": "30.3004",
		"longitude": "-97.7522"
	},
	{
		"title": "Baltimore",
		"latitude": "39.3051",
		"longitude": "-76.6144"
	},
	{
		"title": "Bangkok",
		"latitude": "13.75",
		"longitude": "100.5167"
	},
	{
		"title": "Barcelona",
		"latitude": "41.3825",
		"longitude": "2.1769"
	},
	{
		"title": "Basel",
		"latitude": "47.5606",
		"longitude": "7.5906"
	},
	{
		"title": "Beirut",
		"latitude": "33.8869",
		"longitude": "35.5131"
	},
	{
		"title": "Bergen",
		"latitude": "60.3925",
		"longitude": "5.3233"
	},
	{
		"title": "Berlin",
		"latitude": "52.5167",
		"longitude": "13.3833"
	},
	{
		"title": "Bologna",
		"latitude": "44.4939",
		"longitude": "11.3428"
	},
	{
		"title": "Boston",
		"latitude": "42.3188",
		"longitude": "-71.0846"
	},
	{
		"title": "Bratislava",
		"latitude": "48.1447",
		"longitude": "17.1128"
	},
	{
		"title": "Brno",
		"latitude": "49.1953",
		"longitude": "16.6083"
	},
	{
		"title": "Brussels",
		"latitude": "50.8467",
		"longitude": "4.3517"
	},
	{
		"title": "Budapest",
		"latitude": "47.4983",
		"longitude": "19.0408"
	},
	{
		"title": "Burgas",
		"latitude": "42.5",
		"longitude": "27.4667"
	},
	{
		"title": "Cairo",
		"latitude": "30.0561",
		"longitude": "31.2394"
	},
	{
		"title": "Canberra",
		"latitude": "-35.2931",
		"longitude": "149.1269"
	},
	{
		"title": "Charleston",
		"latitude": "32.8153",
		"longitude": "-79.9628"
	},
	{
		"title": "Chicago",
		"latitude": "41.8373",
		"longitude": "-87.6862"
	},
	{
		"title": "Christchurch",
		"latitude": "-43.5309",
		"longitude": "172.6365"
	},
	{
		"title": "Christchurch",
		"latitude": "50.73",
		"longitude": "-1.78"
	},
	{
		"title": "Copenhagen",
		"latitude": "55.6786",
		"longitude": "12.5635"
	},
	{
		"title": "Dallas",
		"latitude": "32.7936",
		"longitude": "-96.7662"
	},
	{
		"title": "Delhi",
		"latitude": "28.66",
		"longitude": "77.23"
	},
	{
		"title": "Denver",
		"latitude": "39.7621",
		"longitude": "-104.8759"
	},
	{
		"title": "Dubai",
		"latitude": "25.2697",
		"longitude": "55.3094"
	},
	{
		"title": "Dublin",
		"latitude": "53.3425",
		"longitude": "-6.2658"
	},
	{
		"title": "Florence",
		"latitude": "43.7714",
		"longitude": "11.2542"
	},
	{
		"title": "Frankfurt",
		"latitude": "50.1136",
		"longitude": "8.6797"
	},
	{
		"title": "Genoa",
		"latitude": "44.4072",
		"longitude": "8.934"
	},
	{
		"title": "Glasgow",
		"latitude": "55.8609",
		"longitude": "-4.2514"
	},
	{
		"title": "Guangzhou",
		"latitude": "23.1288",
		"longitude": "113.259"
	},
	{
		"title": "Hamburg",
		"latitude": "53.55",
		"longitude": "10"
	},
	{
		"title": "Hong Kong",
		"latitude": "22.305",
		"longitude": "114.185"
	},
	{
		"title": "Honolulu",
		"latitude": "21.3294",
		"longitude": "-157.846"
	},
	{
		"title": "Idaho Falls",
		"latitude": "43.4872",
		"longitude": "-112.0362"
	},
	{
		"title": "Jaipur",
		"latitude": "26.9167",
		"longitude": "75.8667"
	},
	{
		"title": "Jerusalem",
		"latitude": "31.7833",
		"longitude": "35.2167"
	},
	{
		"title": "Krakow",
		"latitude": "50.0614",
		"longitude": "19.9372"
	},
	{
		"title": "Kyoto",
		"latitude": "35.0111",
		"longitude": "135.7669"
	},
	{
		"title": "Las Vegas",
		"latitude": "36.2333",
		"longitude": "-115.2654"
	},
	{
		"title": "Lisbon",
		"latitude": "38.7452",
		"longitude": "-9.1604"
	},
	{
		"title": "London",
		"latitude": "51.5072",
		"longitude": "-0.1275"
	},
	{
		"title": "Los Angeles",
		"latitude": "34.1139",
		"longitude": "-118.4068"
	},
	{
		"title": "Luxor",
		"latitude": "25.6969",
		"longitude": "32.6422"
	},
	{
		"title": "Malaga",
		"latitude": "36.7167",
		"longitude": "-4.4167"
	},
	{
		"title": "Manchester",
		"latitude": "53.4794",
		"longitude": "-2.2453"
	},
	{
		"title": "Milan",
		"latitude": "45.4669",
		"longitude": "9.19"
	},
	{
		"title": "Milwaukee",
		"latitude": "43.0642",
		"longitude": "-87.9673"
	},
	{
		"title": "Mombasa",
		"latitude": "-4.05",
		"longitude": "39.6667"
	},
	{
		"title": "Montreal",
		"latitude": "45.5089",
		"longitude": "-73.5617"
	},
	{
		"title": "Munich",
		"latitude": "48.1372",
		"longitude": "11.5755"
	},
	{
		"title": "Nara",
		"latitude": "34.6833",
		"longitude": "135.7833"
	},
	{
		"title": "Nashville",
		"latitude": "36.1715",
		"longitude": "-86.7843"
	},
	{
		"title": "New Orleans",
		"latitude": "30.0687",
		"longitude": "-89.9288"
	},
	{
		"title": "Nice",
		"latitude": "43.7034",
		"longitude": "7.2663"
	},
	{
		"title": "Osaka",
		"latitude": "34.6936",
		"longitude": "135.5019"
	},
	{
		"title": "Oslo",
		"latitude": "59.9111",
		"longitude": "10.7528"
	},
	{
		"title": "Paris",
		"latitude": "48.8566",
		"longitude": "2.3522"
	},
	{
		"title": "Philadelphia",
		"latitude": "40.0077",
		"longitude": "-75.1339"
	},
	{
		"title": "Phoenix",
		"latitude": "33.5722",
		"longitude": "-112.0891"
	},
	{
		"title": "Pisa",
		"latitude": "43.7167",
		"longitude": "10.4"
	},
	{
		"title": "Porlamar",
		"latitude": "10.9556",
		"longitude": "-63.8478"
	},
	{
		"title": "Prague",
		"latitude": "50.0833",
		"longitude": "14.4167"
	},
	{
		"title": "Providence",
		"latitude": "41.823",
		"longitude": "-71.4187"
	},
	{
		"title": "Queenstown",
		"latitude": "-45.03023",
		"longitude": "168.66271"
	},
	{
		"title": "Reno",
		"latitude": "39.5497",
		"longitude": "-119.8483"
	},
	{
		"title": "Reykjavik",
		"latitude": "64.1475",
		"longitude": "-21.935"
	},
	{
		"title": "Rijeka",
		"latitude": "45.3297",
		"longitude": "14.4322"
	},
	{
		"title": "Rome",
		"latitude": "41.8931",
		"longitude": "12.4828"
	},
	{
		"title": "Rotterdam",
		"latitude": "51.92",
		"longitude": "4.48"
	},
	{
		"title": "Salt Lake City",
		"latitude": "40.7777",
		"longitude": "-111.9306"
	},
	{
		"title": "Salzburg",
		"latitude": "47.7972",
		"longitude": "13.0477"
	},
	{
		"title": "San Antonio",
		"latitude": "29.4658",
		"longitude": "-98.5253"
	},
	{
		"title": "San Antonio",
		"latitude": "18.4468",
		"longitude": "-66.3002"
	},
	{
		"title": "San Diego",
		"latitude": "32.8312",
		"longitude": "-117.1225"
	},
	{
		"title": "San Francisco",
		"latitude": "37.7562",
		"longitude": "-122.443"
	},
	{
		"title": "San Marino",
		"latitude": "43.932",
		"longitude": "12.4484"
	},
	{
		"title": "Santo Domingo",
		"latitude": "18.4764",
		"longitude": "-69.8933"
	},
	{
		"title": "Sao Paulo",
		"latitude": "-23.5504",
		"longitude": "-46.6339"
	},
	{
		"title": "Seattle",
		"latitude": "47.6211",
		"longitude": "-122.3244"
	},
	{
		"title": "Shanghai",
		"latitude": "31.1667",
		"longitude": "121.4667"
	},
	{
		"title": "Split",
		"latitude": "43.51",
		"longitude": "16.45"
	},
	{
		"title": "Stockholm",
		"latitude": "59.3294",
		"longitude": "18.0686"
	},
	{
		"title": "Sydney",
		"latitude": "-33.865",
		"longitude": "151.2094"
	},
	{
		"title": "Tainan",
		"latitude": "22.9833",
		"longitude": "120.1833"
	},
	{
		"title": "Taipei",
		"latitude": "25.0478",
		"longitude": "121.5319"
	},
	{
		"title": "Tampa",
		"latitude": "27.9942",
		"longitude": "-82.4451"
	},
	{
		"title": "Toronto",
		"latitude": "43.7417",
		"longitude": "-79.3733"
	},
	{
		"title": "Trondheim",
		"latitude": "63.44",
		"longitude": "10.4"
	},
	{
		"title": "Vaduz",
		"latitude": "47.1415",
		"longitude": "9.5215"
	},
	{
		"title": "Varanasi",
		"latitude": "25.3189",
		"longitude": "83.0128"
	},
	{
		"title": "Venice",
		"latitude": "45.4397",
		"longitude": "12.3319"
	},
	{
		"title": "Verona",
		"latitude": "45.4386",
		"longitude": "10.9928"
	},
	{
		"title": "Vienna",
		"latitude": "48.2083",
		"longitude": "16.3731"
	},
	{
		"title": "Warsaw",
		"latitude": "52.2167",
		"longitude": "21.0333"
	},
	{
		"title": "Wellington",
		"latitude": "-41.2889",
		"longitude": "174.7772"
	},
	{
		"title": "Wroclaw",
		"latitude": "51.1077",
		"longitude": "17.0353"
	}
];