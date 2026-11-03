# Dibuja el icono y la pantalla de carga de la app.
from PIL import Image, ImageDraw, ImageFilter
import os
os.makedirs('assets', exist_ok=True)
NAVY=(14,26,43); LAMP=(255,200,87); LEAF=(63,125,79); LEAF2=(79,150,96)
def scene(S, bg=True, fg=True, scale=1.0):
    im=Image.new('RGBA',(S,S),NAVY+(255,) if bg else (0,0,0,0))
    if not fg: return im
    beam=Image.new('RGBA',(S,S),(0,0,0,0)); d=ImageDraw.Draw(beam)
    c=S/2; k=S/1024*scale; ox,oy=c-300*k,c+300*k
    d.polygon([(ox,oy),(c+420*k,c-360*k),(c+140*k,c-440*k)],fill=LAMP+(90,))
    im.alpha_composite(beam.filter(ImageFilter.GaussianBlur(18*k)))
    d=ImageDraw.Draw(im)
    d.polygon([(ox-60*k,oy+40*k),(ox-20*k,oy+80*k),(ox+40*k,oy+20*k),(ox,oy-20*k)],fill=(60,60,70,255))
    d.ellipse([ox-10*k,oy-40*k,ox+50*k,oy+20*k],fill=LAMP+(255,))
    for (x,y,r,col) in [(-150,120,150,LEAF),(150,120,150,LEAF),(0,40,190,LEAF2),(-230,200,110,LEAF),(230,200,110,LEAF),(0,210,160,LEAF)]:
        d.ellipse([c+(x-r)*k,c+(y-r)*k,c+(x+r)*k,c+(y+r)*k],fill=col+(255,))
    for ex in (-70,70):
        d.ellipse([c+(ex-42)*k,c-52*k,c+(ex+42)*k,c+32*k],fill=(245,245,240,255))
        d.ellipse([c+(ex-2)*k,c-28*k,c+(ex+30)*k,c+4*k],fill=(15,15,20,255))
    return im
scene(1024).save('assets/icon-only.png')
scene(1024,fg=False).save('assets/icon-background.png')
scene(1024,bg=False,scale=.72).save('assets/icon-foreground.png')
for n in ('splash.png','splash-dark.png'):
    sp=Image.new('RGBA',(2732,2732),NAVY+(255,)); sp.alpha_composite(scene(900),(916,916)); sp.convert('RGB').save('assets/'+n)
print('Iconos creados')
