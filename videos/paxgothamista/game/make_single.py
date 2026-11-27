import base64, io, os, re, sys
from PIL import Image
P='public'; out=sys.argv[1] if len(sys.argv)>1 else 'RebornByDawn-play.html'
inline={}
def b64(data, mime): return f'data:{mime};base64,'+base64.b64encode(data).decode()
for f in sorted(os.listdir(P+'/assets')):
    path=f'{P}/assets/{f}'; im=Image.open(path); buf=io.BytesIO()
    if f.endswith('.jpg') or f.endswith('_n.png') or f in ('orbituary.png',):
        im.convert('RGB').save(buf,'JPEG',quality=88); mime='image/jpeg'
    else:
        im.save(buf,'WEBP',quality=90,method=6); mime='image/webp'
    inline['assets/'+f]=b64(buf.getvalue(),mime)
for f in sorted(os.listdir(P+'/fonts')): inline['fonts/'+f]=b64(open(f'{P}/fonts/{f}','rb').read(),'font/ttf')
for f in sorted(os.listdir(P+'/audio')): inline['audio/'+f]=b64(open(f'{P}/audio/{f}','rb').read(),'audio/mpeg')
html=open(P+'/index.html').read(); js=open(P+'/game.js').read()
import json
html=html.replace('<img class="wm" src="assets/wordmark.png"', f'<img class="wm" src="{inline["assets/wordmark.png"]}"')
html=html.replace('<script src="game.js"></script>', '<script>window.REBORN_INLINE='+json.dumps(inline)+';</script>\n<script>'+js.replace('</script','<\\/script')+'</script>')
open(out,'w').write(html); print(out, round(os.path.getsize(out)/1e6,2),'MB')
