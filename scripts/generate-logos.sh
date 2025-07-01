#!/bin/bash

# Logo Generation Script for Polyburg Terminal
# Place your original logos as:
# - public/polyburg-square-source.png  
# - public/polyburg-landscape-source.png
# Then run this script from project root

cd public

echo "🎨 Generating logo variants for Polyburg Terminal..."

# Check if source files exist
if [ ! -f "polyburg-square-source.png" ]; then
    echo "❌ Missing polyburg-square-source.png - please save your square logo with this name first"
    exit 1
fi

if [ ! -f "polyburg-landscape-source.png" ]; then
    echo "❌ Missing polyburg-landscape-source.png - please save your landscape logo with this name first"  
    exit 1
fi

echo "📐 Creating square logo variants..."

# Create square variants using ImageMagick
convert polyburg-square-source.png -resize 64x64 -quality 90 polyburg-square-64.png
convert polyburg-square-source.png -resize 192x192 -quality 90 polyburg-square-192.png
convert polyburg-square-source.png -resize 512x512 -quality 90 polyburg-square-512.png

# Copy main logos
cp polyburg-square-source.png polyburg-square.png
cp polyburg-landscape-source.png polyburg-landscape.png

echo "🌐 Creating favicon..."
convert polyburg-square-source.png -resize 32x32 favicon.ico

# Create SVG favicon from square (you'll need to manually create this)
echo "📝 Remember to update favicon.svg manually with your P logo design"

echo "✅ Logo generation complete!"
echo ""
echo "Generated files:"
echo "  • polyburg-square.png (main square logo)"
echo "  • polyburg-landscape.png (main landscape logo)"  
echo "  • polyburg-square-64.png (small UI)"
echo "  • polyburg-square-192.png (PWA icon)"
echo "  • polyburg-square-512.png (high-res PWA icon)"
echo "  • favicon.ico (browser favicon)"
echo ""
echo "🚀 Your logos are ready for the website!" 