export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LodgingBusiness",
        "@id": "https://thecoastal.com.au/#lodging",
        "name": "The Coastal",
        "description": "Luxury private holiday accommodation in Berry, NSW South Coast. One main house sleeping 8+ guests and three boutique suites set on 12 acres of gardens and open land, minutes from Seven Mile Beach.",
        "url": "https://thecoastal.com.au",
        "telephone": "",
        "email": "hello@thecoastal.com.au",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Berry",
          "addressLocality": "Berry",
          "addressRegion": "NSW",
          "postalCode": "2535",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -34.7749,
          "longitude": 150.6942
        },
        "image": "https://thecoastal.com.au/og-image.jpg",
        "priceRange": "$$$",
        "starRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "numberOfRooms": 4,
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Private Pool", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Full Kitchen", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Fire Pit", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Private Outdoor Space", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true }
        ],
        "hasMap": "https://maps.google.com/?q=Berry+NSW+2535",
        "openingHours": "Mo-Su 00:00-24:00",
        "checkinTime": "15:00",
        "checkoutTime": "10:00",
        "petsAllowed": false,
        "containsPlace": [
          {
            "@type": "Accommodation",
            "name": "The House",
            "description": "Main four-bedroom residence sleeping 8+ guests. Open-plan living, outdoor terrace, fire pit, heated pool, fully equipped kitchen.",
            "numberOfRooms": 4,
            "occupancy": {
              "@type": "QuantitativeValue",
              "minValue": 1,
              "maxValue": 10
            }
          },
          {
            "@type": "Accommodation",
            "name": "The Olive Suite",
            "description": "Private one-bedroom suite set beside the olive grove. Shaded afternoon light, private outdoor space.",
            "numberOfRooms": 1,
            "occupancy": {
              "@type": "QuantitativeValue",
              "minValue": 1,
              "maxValue": 2
            }
          },
          {
            "@type": "Accommodation",
            "name": "The Shoreline Suite",
            "description": "Private one-bedroom suite catching morning light. Ideal for couples and early risers.",
            "numberOfRooms": 1,
            "occupancy": {
              "@type": "QuantitativeValue",
              "minValue": 1,
              "maxValue": 2
            }
          },
          {
            "@type": "Accommodation",
            "name": "The Horizon Suite",
            "description": "Private one-bedroom suite at the hill's edge with panoramic views across the property. Private deck.",
            "numberOfRooms": 1,
            "occupancy": {
              "@type": "QuantitativeValue",
              "minValue": 1,
              "maxValue": 2
            }
          }
        ],
        "nearbyAttractions": [
          { "@type": "TouristAttraction", "name": "Seven Mile Beach National Park", "address": "Gerroa NSW 2534" },
          { "@type": "TouristAttraction", "name": "Berry Township", "address": "Berry NSW 2535" },
          { "@type": "FoodEstablishment", "name": "Sara Dining", "address": "Berry NSW 2535" },
          { "@type": "FoodEstablishment", "name": "Silos Estate", "address": "Berry NSW 2535" },
          { "@type": "FoodEstablishment", "name": "Milkwood Bakery", "address": "Berry NSW 2535" },
          { "@type": "Winery", "name": "Two Figs Winery", "address": "Jaspers Brush NSW 2535" },
          { "@type": "TouristAttraction", "name": "Kiama Blowhole", "address": "Kiama NSW 2533" },
          { "@type": "TouristAttraction", "name": "Jervis Bay", "address": "Jervis Bay NSW 2540" }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://thecoastal.com.au/#website",
        "url": "https://thecoastal.com.au",
        "name": "The Coastal",
        "description": "Luxury holiday accommodation Berry NSW South Coast",
        "publisher": {
          "@id": "https://thecoastal.com.au/#lodging"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://thecoastal.com.au/book"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://thecoastal.com.au"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "The Collection",
            "item": "https://thecoastal.com.au/collection"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Book",
            "item": "https://thecoastal.com.au/book"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
