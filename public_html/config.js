// --------------------------------------------------------
//
// This file is to configure the configurable settings.
// Load this file before script.js file at gmap.html.
//
// --------------------------------------------------------

// -- Title Settings --------------------------------------
// Show number of aircraft and/or messages per second in the page title
PlaneCountInTitle = true;
MessageRateInTitle = false;

// -- Output Settings -------------------------------------
// The DisplayUnits setting controls whether nautical (ft, NM, knots), 
// metric (m, km, km/h) or imperial (ft, mi, mph) units are used in the 
// plane table and in the detailed plane info. Valid values are
// "nautical", "metric", or "imperial".
DisplayUnits = "nautical";

// -- Map settings ----------------------------------------
// These settings are overridden by any position information
// provided by dump1090 itself. All positions are in decimal
// degrees.

// Default center of the map.
DefaultCenterLat = -34.317;
DefaultCenterLon = 152;
// The google maps zoom level, 0 - 16, lower is further out
DefaultZoomLvl   = 8;

// Center marker. If dump1090 provides a receiver location,
// that location is used and these settings are ignored.

SiteShow    = true;           // true to show a center marker
SiteLat     = -34.317;            // position of the marker
SiteLon     = 150.929;
SiteName    = "9621-YXWL | T-YWOL1 | PF97882"; // tooltip of the marker

// -- Marker settings -------------------------------------

// These settings control the coloring of aircraft by altitude.
// All color values are given as Hue (0-359) / Saturation (0-100) / Lightness (0-100)
ColorByAlt = {
        // HSL for planes with unknown altitude:
        unknown : { h: 0,   s: 0,   l: 40 },

        // HSL for planes that are on the ground:
        ground  : { h: 15, s: 80, l: 20 },

        air : {
                // These define altitude-to-hue mappings
                // at particular altitudes; the hue
                // for intermediate altitudes that lie
                // between the provided altitudes is linearly
                // interpolated.
                //
                // Mappings must be provided in increasing
                // order of altitude.
                //
                // Altitudes below the first entry use the
                // hue of the first entry; altitudes above
                // the last entry use the hue of the last
                // entry.
                h: [ { alt: 2000,  val: 20 },    // orange
                     { alt: 10000, val: 140 },   // light green
                     { alt: 40000, val: 300 } ], // magenta
                s: 85,
                l: 50,
        },

        // Changes added to the color of the currently selected plane
        selected : { h: 0, s: -10, l: +20 },

        // Changes added to the color of planes that have stale position info
        stale :    { h: 0, s: -10, l: +30 },

        // Changes added to the color of planes that have positions from mlat
        mlat :     { h: 0, s: -10, l: -10 }
};

// For a monochrome display try this:
// ColorByAlt = {
//         unknown :  { h: 0, s: 0, l: 40 },
//         ground  :  { h: 0, s: 0, l: 30 },
//         air :      { h: [ { alt: 0, val: 0 } ], s: 0, l: 50 },
//         selected : { h: 0, s: 0, l: +30 },
//         stale :    { h: 0, s: 0, l: +30 },
//         mlat :     { h: 0, s: 0, l: -10 }
// };

// Outline color for aircraft icons with an ADS-B position
OutlineADSBColor = '#000000';

// Outline color for aircraft icons with a mlat position
OutlineMlatColor = '#4040FF';

SiteCircles = false; // true to show circles (only shown if the center marker is shown)
// In miles, nautical miles, or km (depending settings value 'DisplayUnits')
DefaultSiteCirclesCount = 0;
DefaultSiteCirclesBaseDistance = 100;
DefaultSiteCirclesInterval = 50;

// Controls page title, righthand pane when nothing is selected
PageName = "Tugzrida ADSB | SkyAware";

// Show country flags by ICAO addresses?
ShowFlags = true;

// Path to country flags (can be a relative or absolute URL; include a trailing /)
FlagPath = "flags-tiny/";

// Set to true to enable the FAA base layers (US coverage only)
FAALayers = false;

// Provide a Bing Maps API key here to enable the Bing imagery layer.
// You can obtain a free key (with usage limits) at
// https://www.bingmapsportal.com/ (you need a "basic key")
//
// Be sure to quote your key:
//   BingMapsAPIKey = "your key here";
//
BingMapsAPIKey = null;

// Turn on display of extra Mode S EHS / ADS-B v1/v2 data
// This is not polished yet (and so is disabled by default),
// currently it's just a data dump of the new fields with no UX work.
ExtendedData = true;

DefaultMaxAltitudeFilter = 65000
DefaultMinAltitudeFilter = 0
DefaultMaxSpeedFilter = 1000
DefaultMinSpeedFilter = 0
