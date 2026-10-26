function cleanPart(s){return s.normalize('NFC').replace(/[\\/]/g,'.').replace(/[<>:"|?*\x00-\x1f]/g,'').replace(/\s+/g,' ').trim().replace(/[. ]+$/,'')}
function personName(text){
 const lines=text.split(/\r?\n/).map(s=>s.replace(/\s+/g,' ').trim()).filter(Boolean);
 const valid=s=>s&&!/\d|�|COMISS|MINIST|SECRETARIA|INSTIT|GEST[ÃA]O|COORDENA|NACIONAL|SOLICITA|EXAMES|SUBSISTEMA|ENDERE|SERVIDOR|NASCIMENTO/i.test(s)&&s.split(/\s+/).length>=2&&s.length<90&&/^[\p{L} .’'\-]+$/u.test(s);
 const value=s=>s.replace(/^.*?\b(?:nome(?: completo)?|paciente|benefici[áa]rio)\s*[:\-]?\s*/i,'').replace(/\s+(?:sexo|cpf|data de nascimento)\b.*$/i,'').trim();
 let start=lines.findIndex(s=>/dados do (?:servidor|paciente|benefici)/i.test(s));
 if(start>=0){for(let i=start+1;i<Math.min(start+6,lines.length);i++){let s=value(lines[i]);if(valid(s)&&!/^(nome|sexo)$/i.test(s))return s.toLocaleUpperCase('pt-BR')}}
 for(let i=0;i<lines.length;i++){if(/\b(?:paciente|benefici[áa]rio|nome completo)\b/i.test(lines[i])){for(const s of [value(lines[i]),lines[i+1]])if(valid(s))return s.toLocaleUpperCase('pt-BR')}}
 for(let i=1;i<lines.length;i++){if(/^(?:sexo\s*[:\-]?\s*)?(?:masculino|feminino)\b/i.test(lines[i])){const s=value(lines[i-1]);if(valid(s))return s.toLocaleUpperCase('pt-BR')}}
 const candidates=lines.filter(s=>/^nome\s*[:\-]?\s+/i.test(s)).map(value).filter(valid);return candidates.length===1?candidates[0].toLocaleUpperCase('pt-BR'):'';
}
function uniqueName(base,used){let name=base+'.pdf',n=2;while(used.has(name.toLocaleLowerCase()))name=base+' ('+n+++').pdf';used.add(name.toLocaleLowerCase());return name}
if(typeof module!=='undefined')module.exports={cleanPart,personName,uniqueName};
