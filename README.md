# API's Used:
1. Network Information API
What it does: Checks the user's internet connection speed. If it's slow (like 2G), the app switches to a "Low Data Mode" to save data.

How it's used: We check the connection speed, and if it's too slow, we show simpler content.

2. Geolocation API
What it does: Gets the user's current location (latitude and longitude).

How it's used: The app fetches and displays nearby parking spots based on your location.

3. Intersection Observer API
What it does: Helps with lazy loading (loading content only when it comes into view) and adds animations.

How it's used: When you scroll and an element with the .lazy class appears, it gets highlighted.
