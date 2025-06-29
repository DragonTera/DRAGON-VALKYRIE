'use strict'

const SettingsUI = require('tera-mod-ui').Settings;

const TAG = "<font color='#04ACEC'>DRAGON-VALKYRIE:</font> ";

const JOB_VALK              = 12;

//1
const S_SLASH_0             = 11200;
const S_SLASH_1             = 11201;
const S_SLASH_2             = 11202;
const S_SLASH_3             = 11203;

//2
const S_OVERHEAD_SLASH_0    = 20700;
const S_OVERHEAD_SLASH_1    = 20730;
const S_OVERHEAD_SLASH_2    = 20799;    // ?
const S_OVERHEAD_SLASH_3    = 25700;    //RAGNAROK
const S_OVERHEAD_SLASH_4    = 25730;    //RAGNAROK

//3
const S_GLAIVE_STRIKE_0     = 30900;
const S_GLAIVE_STRIKE_1     = 30930;
const S_GLAIVE_STRIKE_2     = 30999;    // ?
const S_GLAIVE_STRIKE_3     = 35900;    //RAGNAROK
const S_GLAIVE_STRIKE_4     = 35930;    //RAGNAROK

//4 TARGET
const S_CHARGE_0            = 41000;
const S_CHARGE_1            = 41010;
const S_CHARGE_2            = 41011;
const S_CHARGE_3            = 41099;    // ?
const S_CHARGE_4            = 46000;    //RAGNAROK
const S_CHARGE_5            = 46010;    //RAGNAROK

//5
const S_MAELSTROM_0         = 50500;
const S_MAELSTROM_1         = 50530;
const S_MAELSTROM_2         = 50599;    // ?
const S_MAELSTROM_3         = 55500;    //RAGNAROK
const S_MAELSTROM_4         = 55530;    //RAGNAROK

//6
const S_LEAPING_SLASH_0     = 61200;
const S_LEAPING_SLASH_1     = 61230;
const S_LEAPING_SLASH_2     = 61299;    // ?
const S_LEAPING_SLASH_3     = 66200;    //RAGNAROK
const S_LEAPING_SLASH_4     = 66230;    //RAGNAROK

//7
const S_SPINNING_DEEATH_0   = 70900;
const S_SPINNING_DEEATH_1   = 70901;
const S_SPINNING_DEEATH_2   = 70902;
const S_SPINNING_DEEATH_3   = 70930;
const S_SPINNING_DEEATH_4   = 70999;    // ?    
const S_SPINNING_DEEATH_5   = 75900;    //RAGNAROK
const S_SPINNING_DEEATH_6   = 75901;    //RAGNAROK
const S_SPINNING_DEEATH_7   = 75902;    //RAGNAROK
const S_SPINNING_DEEATH_8   = 75930;    //RAGNAROK

//8
const S_TITANSBANE_0        = 80100;
const S_TITANSBANE_1        = 80101;
const S_TITANSBANE_2        = 80130;
const S_TITANSBANE_3        = 80199;    // ?
const S_TITANSBANE_4        = 85100;    //RAGNAROK
const S_TITANSBANE_5        = 85101;    //RAGNAROK
const S_TITANSBANE_6        = 85130;    //RAGNAROK

//9
const S_GROUND_BASH_0       = 91100;
const S_GROUND_BASH_1       = 91130;
const S_GROUND_BASH_2       = 91199;    // ?
const S_GROUND_BASH_3       = 96100;    //RAGNAROK
const S_GROUND_BASH_4       = 96130;    //RAGNAROK

//10
const S_DREAM_SLASH_0       = 101100;
const S_DREAM_SLASH_1       = 101130;
const S_DREAM_SLASH_2       = 101199;   // ?
const S_DREAM_SLASH_3       = 106100;   //RAGNAROK
const S_DREAM_SLASH_4       = 106130;   //RAGNAROK

//11
const S_SHINING_CRESCENT_0  = 110400;
const S_SHINING_CRESCENT_1  = 110401;
const S_SHINING_CRESCENT_2  = 110430;
const S_SHINING_CRESCENT_3  = 110431;
const S_SHINING_CRESCENT_4  = 110499;   // ?
const S_SHINING_CRESCENT_5  = 115400;   //RAGNAROK
const S_SHINING_CRESCENT_6  = 115401;   //RAGNAROK
const S_SHINING_CRESCENT_7  = 115430;   //RAGNAROK
const S_SHINING_CRESCENT_8  = 115431;   //RAGNAROK

//12
const S_RAGNAROK_0          = 120100;
const S_RAGNAROK_1          = 120130;

//13
const S_BLOODFLOWER_0       = 131100;
const S_BLOODFLOWER_1       = 131130;
const S_BLOODFLOWER_2       = 131199;   // ?
const S_BLOODFLOWER_3       = 136100;   //RAGNAROK
const S_BLOODFLOWER_4       = 136130;   //RAGNAROK

//14
const S_EVASION_0           = 140100;
const S_EVASION_1           = 140101;
const S_EVASION_2           = 140199;   // ?

//15
const S_WINDSLASH_0         = 151100;
const S_WINDSLASH_1         = 151130;
const S_WINDSLASH_2         = 151199;   // ?
const S_WINDSLASH_3         = 156100;   //RAGNAROK
const S_WINDSLASH_4         = 156130;   //RAGNAROK

//16
const S_RUNEBURST_0         = 161200;
const S_RUNEBURST_1         = 161230;
const S_RUNEBURST_2         = 161299;   // ?
const S_RUNEBURST_3         = 166200;   //RAGNAROK
const S_RUNEBURST_4         = 166230;   //RAGNAROK

//17
const S_BALDERS_TEARS_0     = 170100;
const S_BALDERS_TEARS_1     = 170199;   // ?

//19
const S_RECLAMATION_0       = 190100;
const S_RECLAMATION_1       = 190130;
const S_RECLAMATION_2       = 190199;   // ?

//20
const S_PVP                 = 200001;

//21
const S_BACKSTAB            = 200800;

//22
const S_DARK_HERALD_0       = 210100;
const S_DARK_HERALD_1       = 210199;   // ?
const S_DARK_HERALD_2       = 215100;   //RAGNAROK

//23
const S_GUNGNIR_BITE_0      = 230100;
const S_GUNGNIR_BITE_1      = 230101;
const S_GUNGNIR_BITE_2      = 230102;
const S_GUNGNIR_BITE_3      = 230109;
const S_GUNGNIR_BITE_4      = 230199;   // ?
const S_GUNGNIR_BITE_5      = 235100;   //RAGNAROK
const S_GUNGNIR_BITE_6      = 235101;   //RAGNAROK
const S_GUNGNIR_BITE_7      = 235102;   //RAGNAROK
const S_GUNGNIR_BITE_8      = 235109;   //RAGNAROK

//24
const S_TWILIGHT_WALTZ_0    = 240100;
const S_TWILIGHT_WALTZ_1    = 240101;
const S_TWILIGHT_WALTZ_2    = 240102;
const S_TWILIGHT_WALTZ_3    = 240103;
const S_TWILIGHT_WALTZ_4    = 240104;
const S_TWILIGHT_WALTZ_5    = 240109;
const S_TWILIGHT_WALTZ_6    = 240199;   // ?
const S_TWILIGHT_WALTZ_7    = 245100;   //RAGNAROK
const S_TWILIGHT_WALTZ_8    = 245101;   //RAGNAROK
const S_TWILIGHT_WALTZ_9    = 245102;   //RAGNAROK
const S_TWILIGHT_WALTZ_10   = 245103;   //RAGNAROK
const S_TWILIGHT_WALTZ_11   = 245104;   //RAGNAROK
const S_TWILIGHT_WALTZ_12   = 245109;   //RAGNAROK

//25
const S_GODSFALL_0          = 250100;   //start
const S_GODSFALL_1          = 250101;
const S_GODSFALL_2          = 250102;   //jump
const S_GODSFALL_3          = 250103;
const S_GODSFALL_4          = 250109;
const S_GODSFALL_5          = 250131;   //start fast
const S_GODSFALL_6          = 250132;   //jump fast
const S_GODSFALL_7          = 250199;

const RAGNAROK_BASE         = 5000;
                              //0     1     2     3     4     5     6    7    8     9   10    11   12     13    14   15    16   17    18    19    20    21    22    23   24    25
const CANCEL_DELAY          = [null, null, null, 1200, null, 1700, 980, 800, null, 800, null, 950, null, null, null, 850, 600, null, null, null, null, null, null, 500, 1400, null];

const WHITE_LIST            = [11200, 11201, 11202, 11203, 20700, 20730, 20799, 25700, 25730, 30900, 30930, 30999, 35900, 35930, 41000, 41010, 41011, 41099, 46000, 46010, 50500, 50530, 50599, 55500, 
                               55530, 61200, 61230, 61299, 66200, 66230, 70900, 70901, 70902, 70930, 70999, 75900, 75901, 75902, 75930, 80100, 80101, 80130, 80199, 85100, 85101, 85130, 91100, 91130, 
                               91199, 96100, 96130, 101100, 101130, 101199, 106100, 106130, 110400, 110401, 110430, 110431, 110499, 115400, 115401, 115430, 115431, 120100, 120130, 131100, 131130, 
                               131199, 136100, 136130, 140100, 140101, 140199, 151100, 151130, 151199, 156100, 156130, 161200, 161230, 161299, 166200, 166230, 170100, 170199, 190100, 190130, 190199, 
                               200001, 200800, 210100, 210199, 215100, 230100, 230101, 230102, 230109, 230199, 235100, 235101, 235102, 235109, 240100, 240101, 240102, 240103, 240104, 240109, 240199, 
                               245100, 245101, 245102, 245103, 245104, 245109, 250100, 250101, 250102, 250103, 250109, 250131, 250132, 250199];

module.exports = function valkyrie(mod)
{
    let job;
    let templateId;

    let mySpeed;
    let myEnergy;
    let runemark;
    let moving;

    let skillFinish = [];
    let skillCd     = [];
    let taskSkillCd = [];
    let taskSkill   = [];
    let skillBefore = 0;

    //--------------------------------------------------------------------------------------------------------------------------------------
    //  functions
    //--------------------------------------------------------------------------------------------------------------------------------------

    function _SkillTarget(__event, __skill)
    {
        mod.toServer('C_START_TARGETED_SKILL', 7, 
        {
            skill: __skill,
            w: __event.w,
            loc: __event.loc,
            dest: __event.dest,
            targets: [[0, 0]],
        });

        return;
    }

    function _SkillStart(__event, __skill, __continue)
    {
        mod.toServer('C_START_SKILL', 7,
        {
            skill: __skill,
            w: __event.w,
            loc: __event.loc,
            dest: __event.dest,
            unk: true,
            moving: __event.moving,
            continue: __continue,
            target: __event.target,
        });
    
        return;
    }
    
    function _SkillInstance(__event, __skill)
    {
        mod.toServer('C_START_INSTANCE_SKILL', 7, 
        {
            skill: {
                reserved: 0,
                npc: false,
                type: 1,
                huntingZoneId: 0,
                id: __skill
            },
            loc: {
                x: __event.loc.x,
                y: __event.loc.y,
                z: __event.loc.z
            },
            w: __event.w,
            continue: __event.continue,
            targets: 
            [{
                arrowId: 0,
                gameId: __event.target,
                hitCylinderId: 0
            }],
            endpoints: 
            [{
                x: __event.dest.x,
                y: __event.dest.y,
                z: __event.dest.z
            }]
        });
        
        return;
    }

    function _SkillStage(__event, __skill, __atkId, __stage)
    {
        mod.toServer('S_ACTION_STAGE', 9, 
        {
            gameId: mod.game.me.gameId,
            loc: __event.loc,
            w: __event.w,
            templateId: templateId,
            skill: __skill,
            stage: __stage,
            speed: mySpeed,
            ...(mod.majorPatchVersion >= 75 ? { projectileSpeed: 1 } : 0n),
            id: __atkId,
            effectScale: 1.0,
            moving: __event.moving,
            dest: __event.dest,
            target: 0n,
            animSeq: [],
        });

        return;
    }

    function _SkillEnd(__event, __atkId, __type)
    {
        mod.toServer('S_ACTION_END', 5, 
        {
            gameId: mod.game.me.gameId,
            loc: __event.loc,
            w: __event.w,
            templateId: templateId,
            skill: __event.skill,
            type: __type,
            id: __atkId,
        });
        
        return;
    }

    function _SkillEndClient(__event, __atkId, __type)
    {
        mod.toClient('S_ACTION_END', 5, 
        {
            gameId: mod.game.me.gameId,
            loc: __event.loc,
            w: __event.w,
            templateId: templateId,
            skill: __event.skill,
            type: __type,
            id: __atkId,
        });
        
        return;
    }

    function _Wisper()
    {
        mod.toClient('S_WHISPER', 3,
        {
            gameId: mod.game.me.gameId,
            isWorldEventTarget: 0,
            gm: 0,
            founder: 0,
            name: "DRAGON_VALKYRIE",
            recipient: mod.game.me.name,
            message: "Overpoer is not active.",
        });

        return;
    }

    function _SkillNumber(__id)
    {
        return Math.floor(__id / 10000);
    }

    //--------------------------------------------------------------------------------------------------------------------------------------
    //  Player event
    //--------------------------------------------------------------------------------------------------------------------------------------

    mod.hook('S_LOGIN', mod.majorPatchVersion < 114 ? 14 : 15, (event) => 
    {
        templateId  = event.templateId;
        job         = (templateId -10101) % 100;

        if(job != JOB_VALK){return;}

        setTimeout(function (){mod.command.message('This mod does not work with NGSP, SP or any skill prediction / ping remover.');}, 10000);

        for(let __i = 0; __i < WHITE_LIST.length; __i++)
        {
            skillCd[__i] = false;
        }
        
        return;
    });

    mod.hook('S_PLAYER_STAT_UPDATE', mod.majorPatchVersion < 105 ? 14 : (mod.majorPatchVersion < 108 ? 15 : 17), (event) =>
    {
        if(job != JOB_VALK){return;}
        if(mod.settings.ENABLE == false){return;}

        mySpeed = (event.attackSpeedBonus + event.attackSpeed) / event.attackSpeed;

        return;
    });
    
    mod.hook('S_PLAYER_CHANGE_STAMINA', 1, (event) =>
    {
        if(job != JOB_VALK){return;}
        if(mod.settings.ENABLE == false){return;}

        myEnergy = event.current;

        return;
    });
    
    mod.hook('S_WEAK_POINT', mod.majorPatchVersion < 114 ? 1 : 2, (event) =>
    {
        if(job != JOB_VALK){return;}
        if(mod.settings.ENABLE == false){return;}
        
        runemark = event.runemarksAdded;

        return;
    });

    mod.game.on('leave_game', () => 
    {
        for(let __i = 0; __i < WHITE_LIST.length; __i++)
        {
            clearInterval(taskSkillCd[__i]);
        }
    });
    
    //--------------------------------------------------------------------------------------------------------------------------------------
    //  Cooldown skills event
    //--------------------------------------------------------------------------------------------------------------------------------------

    mod.hook('S_START_COOLTIME_SKILL', mod.majorPatchVersion < 114 ? 3 : 4, (event) =>
    {
        if(job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'S_START_COOLTIME_SKILL: ' + event.skill.id + ' / ' + event.cooldown + ' | ' + _SkillNumber(event.skill.id));}
        if(mod.settings.ENABLE == false){return;}
        if(WHITE_LIST.includes(event.skill.id) == false){return;}

        skillCd[_SkillNumber(event.skill.id)] = true;
        clearInterval(taskSkillCd[_SkillNumber(event.skill.id)]);
        taskSkillCd[_SkillNumber(event.skill.id)] = setTimeout(function (){skillCd[_SkillNumber(event.skill.id)] = false;}, event.cooldown);

        return;
	});

    mod.hook('S_DECREASE_COOLTIME_SKILL', 3, (event) => 
    {
        if(job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'S_DECREASE_COOLTIME_SKILL: ' + event.skill.id + ' / ' + event.cooldown + ' | ' + _SkillNumber(event.skill.id));}
        if(mod.settings.ENABLE == false){return;}
        if(WHITE_LIST.includes(event.skill.id) == false){return;}

        skillCd[_SkillNumber(event.skill.id)] = true;
        clearInterval(taskSkillCd[_SkillNumber(event.skill.id)]);
        taskSkillCd[_SkillNumber(event.skill.id)] = setTimeout(function (){skillCd[_SkillNumber(event.skill.id)] = false;}, event.cooldown);

        return;
	});

    //--------------------------------------------------------------------------------------------------------------------------------------
    //  Cancel skills event
    //--------------------------------------------------------------------------------------------------------------------------------------
    
    mod.hook('S_CANNOT_START_SKILL', 4, (event) => 
    {
        if(job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'S_CANNOT_START_SKILL: ' + event.skill.id);}
        if(mod.settings.ENABLE == false){return;}
        if(WHITE_LIST.includes(event.skill.id) == false){return;}

        return;
	});

    mod.hook('C_CANCEL_SKILL', 3, (event) => 
    {
        if(job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'C_CANCEL_SKILL: ' + event.skill.id + ' | ' + event.type);}
        if(mod.settings.ENABLE == false){return;}
        if(WHITE_LIST.includes(event.skill.id) == false){return;}

        return;
	});

    //--------------------------------------------------------------------------------------------------------------------------------------
    //  Use skills event
    //--------------------------------------------------------------------------------------------------------------------------------------

    mod.hook('C_NOTIFY_LOCATION_IN_DASH', 4, event =>
    {
		if(job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'C_NOTIFY_LOCATION_IN_DASH: ' + event.skill.id);}
        if(mod.settings.ENABLE == false){return;}
        if(WHITE_LIST.includes(event.skill.id) == false){return;}
	})
	mod.hook('C_NOTIFY_LOCATION_IN_ACTION', 4, event =>
    {
		if(job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'C_NOTIFY_LOCATION_IN_ACTION: ' + event.skill.id + ' | ' + event.stage);}
        if(mod.settings.ENABLE == false){return;}
        if(WHITE_LIST.includes(event.skill.id) == false){return;}
	})

    mod.hook('C_PRESS_SKILL', mod.majorPatchVersion < 114 ? 4 : 5, (event) => 
    {
        if(job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'C_PRESS_SKILL: ' + event.skill.id);}
        if(mod.settings.ENABLE == false){return;}
        if(WHITE_LIST.includes(event.skill.id) == false){return;}

        return;
	});

    mod.hook('C_START_SKILL', 7, (event) =>
    {
        if(job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'C_START_SKILL: ' + event.skill.id);}
        if(mod.settings.ENABLE == false){return;}
        if(WHITE_LIST.includes(event.skill.id) == false){return;}

        skillFinish[_SkillNumber(event.skill.id)] = false;
        moving = event.moving;

        if(_SkillNumber(event.skill.id) == _SkillNumber(S_TITANSBANE_0) && mod.settings.TITANSBANE == true)
        {
            if(skillBefore != _SkillNumber(S_TITANSBANE_0))
            {
                _SkillInstance(event, S_TITANSBANE_4);
            }
            else
            {
                _SkillInstance(event, S_TITANSBANE_5);
            }
        }
        else if((event.skill.id == S_GODSFALL_0 || event.skill.id == S_GODSFALL_1) && mod.settings.FAST_CANCEL == true)
        {
            _SkillInstance(event, S_GODSFALL_5);
        }
        else if((event.skill.id == S_GODSFALL_2 || event.skill.id == S_GODSFALL_3) && mod.settings.FAST_CANCEL == true)
        {
            _SkillInstance(event, S_GODSFALL_6);
        }
        else if(_SkillNumber(event.skill.id) == _SkillNumber(S_RAGNAROK_0) && mod.settings.FAST_CANCEL == true)
        {
            _SkillInstance(event, S_RAGNAROK_1);
        }

        skillBefore = _SkillNumber(event.skill.id);

        return;
    });

    mod.hook('S_ACTION_STAGE', 9, event => 
    {
        if(mod.game.me.gameId != event.gameId || job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'S_ACTION_STAGE: ' + event.skill.id);}
        if(mod.settings.ENABLE == false){return;}
        if(WHITE_LIST.includes(event.skill.id) == false){return;}

        if(CANCEL_DELAY[_SkillNumber(event.skill.id)] != null)
        {
            if(_SkillNumber(event.skill.id) == _SkillNumber(S_SPINNING_DEEATH_0)  && (event.skill.id != S_SPINNING_DEEATH_2  && event.skill.id != S_SPINNING_DEEATH_7)) {return;}
            if(_SkillNumber(event.skill.id) == _SkillNumber(S_SHINING_CRESCENT_0) && (event.skill.id != S_SHINING_CRESCENT_3 && event.skill.id != S_SHINING_CRESCENT_8)){return;}
            if(_SkillNumber(event.skill.id) == _SkillNumber(S_TWILIGHT_WALTZ_0)   && (event.skill.id != S_TWILIGHT_WALTZ_4   && event.skill.id != S_TWILIGHT_WALTZ_11)) {return;}
                
            setTimeout(function ()
            {
                if(mod.settings.FAST_CANCEL == true){_SkillEndClient(event, event.id, 12394123);}
                
                if(mod.settings.RUNEMARK == true && runemark > 6){return;}
                else
                {
                    if(_SkillNumber(event.skill.id) == _SkillNumber(S_WINDSLASH_0) && mod.settings.AUTO_LEAPING_SLASH == true)
                    {
                        event.skill.id = ((event.skill.id - S_WINDSLASH_0) >= RAGNAROK_BASE ? S_LEAPING_SLASH_3 : S_LEAPING_SLASH_0);
                        event.loc = event.dest;
                        _SkillStart(event, event.skill, true);
                    }
                    else if(_SkillNumber(event.skill.id) == _SkillNumber(S_LEAPING_SLASH_0) && mod.settings.AUTO_GROUND_BASH == true)
                    {
                        event.skill.id = ((event.skill.id - S_LEAPING_SLASH_0) >= RAGNAROK_BASE ? S_GROUND_BASH_3 : S_GROUND_BASH_0);
                        _SkillStart(event, event.skill, true);
                    }
                }
                
                return;

            }, _SkillNumber(event.skill.id) == _SkillNumber(S_RUNEBURST_0) ? CANCEL_DELAY[_SkillNumber(event.skill.id)] : CANCEL_DELAY[_SkillNumber(event.skill.id)] / mySpeed);
        }

        return;
	});

    mod.hook('C_START_TARGETED_SKILL', 7, event => 
    {
        if(job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'C_START_TARGETED_SKILL: ' + event.skill.id);}
        if(mod.settings.ENABLE == false){return;}
        if(WHITE_LIST.includes(event.skill.id) == false){return;}

        return;
	});
    
    mod.hook('C_START_INSTANCE_SKILL', mod.majorPatchVersion < 114 ? 7 : 8, (event) => 
    {
        if(job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'C_START_INSTANCE_SKILL: ' + event.skill.id);}
        if(mod.settings.ENABLE == false){return;}
        if(WHITE_LIST.includes(event.skill.id) == false){return;}

        return;
    });

    //--------------------------------------------------------------------------------------------------------------------------------------
    //  End skills event
    //--------------------------------------------------------------------------------------------------------------------------------------

    mod.hook('S_ACTION_END', 5, (event) =>
    {
        if(mod.game.me.gameId != event.gameId || job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'S_ACTION_END: ' + event.skill.id + ' | ' + event.type + ' | ' + event.id);}
        if(WHITE_LIST.includes(event.skill.id) == false){return;}

        skillFinish[_SkillNumber(event.skill.id)] = true;

        return;
    });

    //--------------------------------------------------------------------------------------------------------------------------------------
    //  Interface
    //--------------------------------------------------------------------------------------------------------------------------------------

    mod.command.add(['valkyrie'], () =>
    {
        if(ui){ui.show();}
    });

    let ui = null;
    if(global.TeraProxy.GUIMode)
    {
        ui = new SettingsUI(mod, require('./settings_structure'), mod.settings, {height: require('./settings_structure').length * 40, width: 650});
        
        ui.on('update', settings => 
        {
            mod.settings = settings;
        });

        this.destructor = () => 
        {
            if(ui)
            {
                ui.close();
                ui = null;
            }
        };
    }
}