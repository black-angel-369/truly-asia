from PIL import Image, ImageDraw, ImageFont, ImageFilter
import random

NAVY = (14, 34, 58)
NAVY_DEEP = (8, 20, 36)
GOLD = (201, 145, 63)
GOLD_SOFT = (168, 118, 58)
WHITE = (255,255,255)

def font(size, bold=True):
    paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for p in paths:
        try:
            return ImageFont.truetype(p, size)
        except Exception:
            continue
    return ImageFont.load_default()

def gradient_bg(w, h, c1, c2, direction="diag"):
    base = Image.new("RGB", (w, h), c1)
    top = Image.new("RGB", (w, h), c2)
    mask = Image.new("L", (w, h))
    md = ImageDraw.Draw(mask)
    for y in range(h):
        for_x_ratio = y / h
        val = int(255 * for_x_ratio)
        md.line([(0, y), (w, y)], fill=val)
    base.paste(top, (0, 0), mask)
    return base

def add_glow(img, cx, cy, radius, color, alpha=90):
    overlay = Image.new("RGBA", img.size, (0,0,0,0))
    od = ImageDraw.Draw(overlay)
    od.ellipse([cx-radius, cy-radius, cx+radius, cy+radius], fill=color+(alpha,))
    overlay = overlay.filter(ImageFilter.GaussianBlur(radius/2))
    img.paste(Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB"), (0,0))
    return img

def make(path, w, h, c1, c2, label, sub=None, accent=GOLD, quality=72):
    img = gradient_bg(w, h, c1, c2)
    img = add_glow(img, int(w*0.78), int(h*0.22), int(min(w,h)*0.55), accent)
    d = ImageDraw.Draw(img)
    d.rectangle([0, h-6, w, h], fill=accent)
    f1 = font(max(20, w//20))
    f2 = font(max(13, w//40), bold=False)
    bbox = d.textbbox((0,0), label, font=f1)
    tw, th = bbox[2]-bbox[0], bbox[3]-bbox[1]
    d.text(((w-tw)/2, (h-th)/2 - (10 if sub else 0)), label, font=f1, fill=WHITE)
    if sub:
        bbox2 = d.textbbox((0,0), sub, font=f2)
        tw2, th2 = bbox2[2]-bbox2[0], bbox2[3]-bbox2[1]
        d.text(((w-tw2)/2, (h-th)/2 + th + 8), sub, font=f2, fill=accent)
    img.save(path, quality=quality, optimize=True)

# Logo — unchanged concept, kept crisp
logo = Image.new("RGBA", (512, 512), (0,0,0,0))
d = ImageDraw.Draw(logo)
d.ellipse([16,16,496,496], outline=GOLD, width=10)
f = font(150)
d.text((110, 150), "TA", font=f, fill=NAVY)
f2 = font(28)
bbox = d.textbbox((0,0), "GLOBAL TRADE", font=f2)
d.text(((512-(bbox[2]-bbox[0]))/2, 340), "GLOBAL TRADE", font=f2, fill=GOLD)
logo.save("public/images/logo/logo.png")

make("public/images/hero/hero-main.jpg", 1200, 1000, NAVY_DEEP, NAVY, "Placeholder Image", "Hero — sourcing / logistics photograph")
make("public/images/hero/hero-secondary.jpg", 1000, 750, NAVY, NAVY_DEEP, "Placeholder Image", "Company / warehouse photograph")
make("public/images/ceo/mehboob-ali-khan.jpg", 760, 920, NAVY_DEEP, NAVY, "Placeholder Photo", "Mehboob Ali Khan — Founder & CEO")

make("public/images/products/broomsticks.jpg", 900, 900, (46,36,24), (68,52,32), "Placeholder Photo", "Broomsticks — Indonesia")
make("public/images/products/broomsticks-2.jpg", 900, 900, (40,31,20), (60,46,28), "Placeholder Photo", "Broomsticks — detail")
make("public/images/products/turmeric.jpg", 900, 900, (94,58,14), (140,88,24), "Placeholder Photo", "Turmeric", accent=(230,170,60))
make("public/images/products/coffee-beans.jpg", 900, 900, (36,25,18), (54,38,26), "Placeholder Photo", "Coffee Beans")
make("public/images/products/cacao.jpg", 900, 900, (42,26,17), (62,38,24), "Placeholder Photo", "Raw Cacao / Cocoa")

make("public/images/hero/about-story.jpg", 1100, 820, NAVY, NAVY_DEEP, "Placeholder Image", "Our Story photograph")
make("public/images/hero/og-image.jpg", 1200, 630, NAVY_DEEP, NAVY, "Truly Asia Global Trade", "Connecting Asian Supply with Local Markets")

print("done")
