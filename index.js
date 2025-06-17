const TAG = 'DRAGON-VALKYRIE: ';

const JOB_VALK              = 12;

const GODSFALL              = 0;
const LEAPING_SLASH         = 1;
const WINDSLASH             = 2;
const DARK_HERALD           = 3;

const S_GODSFALL            = 250100;

const S_RAGNAROK_0          = 120100;
const S_RAGNAROK_1          = 120130;

const S_LEAPING_SLASH_0     = 61200;
const S_LEAPING_SLASH_1     = 61230;
const S_LEAPING_SLASH_2     = 66200;
const S_LEAPING_SLASH_3     = 66230;

const S_GROUND_BASH_0       = 91100;
const S_GROUND_BASH_1       = 91130;
const S_GROUND_BASH_2       = 96100;
const S_GROUND_BASH_3       = 96130;

const S_GLAIVE_STRIKE_0     = 30900;
const S_GLAIVE_STRIKE_1     = 30930;
const S_GLAIVE_STRIKE_2     = 35900;
const S_GLAIVE_STRIKE_3     = 35930;

const S_WINDSLASH_0         = 151100;
const S_WINDSLASH_1         = 151130;
const S_WINDSLASH_2         = 156100; 
const S_WINDSLASH_3         = 156130;

const S_DARK_HERALD_0       = 210100;
const S_DARK_HERALD_1       = 215100;

const S_RUNEBURST_0         = 161200;
const S_RUNEBURST_1         = 161230;
const S_RUNEBURST_2         = 166200;
const S_RUNEBURST_3         = 166230;

module.exports = function archer(mod)
{
    let job;
    let model;
    let playerId;
    let finish = [true, true, true, true];
    let speed;
    let myEnergy;
    let runemark;

    let groundBashCD    = false;
    let glaiveStrikeCD  = false;

    let task0;
    let task1;
    let task2;
    let task3;

    mod.hook('S_LOGIN', mod.majorPatchVersion < 114 ? 14 : 15, (event) => 
    {
        playerId = event.gameId;
        model    = event.templateId;
        job      = (model -10101) % 100;

        return;
    });

    mod.hook('S_PLAYER_STAT_UPDATE', mod.majorPatchVersion < 105 ? 14 : (mod.majorPatchVersion < 108 ? 15 : 17), (event) =>
    {
        speed = (event.attackSpeedBonus + event.attackSpeed) / event.attackSpeed;

        return;
    });
    
    mod.hook('S_PLAYER_CHANGE_STAMINA', 1, (event) =>
    {
        if(job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'S_PLAYER_CHANGE_STAMINA: ' + event.current);}

        myEnergy = event.current;

        return;
    });

    mod.hook('S_WEAK_POINT', mod.majorPatchVersion < 114 ? 1 : 2, (event) =>
    {
        if(job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'S_WEAK_POINT: ' + event.runemarksAdded);}
        
        runemark = event.runemarksAdded;

        return;
    });
    
    mod.hook('S_CANNOT_START_SKILL', 4, (event) => 
    {
        if(job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'S_CANNOT_START_SKILL: ' + event.skill.id);}

        return;
	});

    mod.hook('S_START_COOLTIME_SKILL', mod.majorPatchVersion < 114 ? 3 : 4, (event) =>
    {
        if(job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'S_START_COOLTIME_SKILL: ' + event.skill.id + ' / ' + event.cooldown);}

        if(event.skill.id == S_GROUND_BASH_0)
        {
            groundBashCD = true;
            setTimeout(function (){groundBashCD = false;}, event.cooldown);
        }
        else if(event.skill.id == S_GLAIVE_STRIKE_0)
        {
            glaiveStrikeCD = true;
            setTimeout(function (){glaiveStrikeCD = false;}, event.cooldown);
        }   

        return;
	});

    mod.hook('C_START_TARGETED_SKILL', 7, {order: -100}, event => 
    {
        if(job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'C_START_TARGETED_SKILL: ' + event.skill.id);}

        return;
	});
    
    mod.hook('C_PRESS_SKILL', mod.majorPatchVersion < 114 ? 4 : 5, (event) => 
    {
        if(job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'C_PRESS_SKILL: ' + event.skill.id);}

        return;
	});

    mod.hook('C_START_INSTANCE_SKILL', mod.majorPatchVersion < 114 ? 7 : 8, (event) => 
    {
        if(job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'C_START_INSTANCE_SKILL: ' + event.skill.id);}

        return;
    });

    mod.hook('C_START_SKILL', 7, (event) =>
    {
        if(job != JOB_VALK){return;}
        if(mod.settings.DEBUG){console.log(TAG + 'C_START_SKILL: ' + event.skill.id);}

        if((event.skill.id == S_LEAPING_SLASH_0 || event.skill.id == S_LEAPING_SLASH_1 || event.skill.id == S_LEAPING_SLASH_2 || event.skill.id == S_LEAPING_SLASH_3) && mod.settings.LEAPING_SLASH == true)
        {
            finish[WINDSLASH] = true;

            if(mod.settings.RUNEMARK == true && runemark < 6)
            {
                finish[LEAPING_SLASH] = false;

                let skillId  = event.skill.id;

                clearInterval(task0);
                task0 = setInterval(function ()
                {
                    if(finish[LEAPING_SLASH] == false)
                    {
                        if(event.skill.id != skillId || (groundBashCD == true && glaiveStrikeCD == true))
                        {
                            finish[LEAPING_SLASH] = true;
                            clearInterval(task0);
                            return;
                        }
                        else
                        {
                            var robot = require("robotjs");
                            robot.keyTap(groundBashCD == false ? mod.settings.GROUND_BASH_KEY : mod.settings.GLAIVE_STRIKE_KEY);
                        }
                    }
                    else
                    {
                        clearInterval(task0);
                        return;
                    }
                }, 25, event);

                setTimeout(function ()
                {
                    if(finish[LEAPING_SLASH] == false)
                    {
                        clearInterval(task0);
                        finish[LEAPING_SLASH] = true;
                    }
                    return;
                }, 1500 / speed, event);
            }
        }
        else if((event.skill.id == S_WINDSLASH_0 || event.skill.id == S_WINDSLASH_1 || event.skill.id == S_WINDSLASH_2 || event.skill.id == S_WINDSLASH_3) && mod.settings.WINDSLASH == true)
        {
            if(mod.settings.RUNEMARK == true && runemark < 7)
            {
                finish[WINDSLASH] = false;

                let skillId  = event.skill.id;

                clearInterval(task1);
                task1 = setInterval(function ()
                {
                    if(finish[WINDSLASH] == false)
                    {
                        if(event.skill.id != skillId)
                        {
                            finish[WINDSLASH] = true;
                            clearInterval(task1);
                            return;
                        }
                        else
                        {
                            var robot = require("robotjs");
                            robot.keyTap(mod.settings.LEAPING_SLASH_KEY);
                        }
                    }
                    else
                    {
                        clearInterval(task1);
                        return;
                    }
                }, 25, event);

                setTimeout(function ()
                {
                    if(finish[WINDSLASH] == false)
                    {
                        clearInterval(task1);
                        finish[WINDSLASH] = true;
                    }
                    return;
                }, 500 / speed, event);
            }
        }
        else if((event.skill.id == S_DARK_HERALD_0 || event.skill.id == S_DARK_HERALD_1) && mod.settings.RUNEBURST == true)
        {
            if(runemark > 6)
            {
                finish[DARK_HERALD] = false;

                let skillId  = event.skill.id;

                clearInterval(task2);
                task2 = setInterval(function ()
                {
                    if(finish[DARK_HERALD] == false)
                    {
                        if(event.skill.id != skillId)
                        {
                            finish[DARK_HERALD] = true;
                            clearInterval(task2);
                            return;
                        }
                        else
                        {
                            var robot = require("robotjs");
                            robot.keyTap(mod.settings.RUNEBURST_KEY);
                        }
                    }
                    else
                    {
                        clearInterval(task2);
                        return;
                    }
                }, 25, event);

                setTimeout(function ()
                {
                    if(finish[DARK_HERALD] == false)
                    {
                        clearInterval(task2);
                        finish[DARK_HERALD] = true;
                    }
                    return;
                }, 500 / speed, event);
            }
        }
        else if(event.skill.id == S_GODSFALL && mod.settings.GODSFALL_KEYS == true)
        {
            finish[GODSFALL] = false;
            
            clearInterval(task3);
            task3 = setInterval(function ()
            {
                if(finish[GODSFALL] == false)
                {
                    var robot = require("robotjs");
                    robot.keyTap(mod.settings.KEY_A);
                    setTimeout(function (){robot.keyTap(mod.settings.KEY_B);},25);
                    setTimeout(function (){robot.keyTap(mod.settings.KEY_C);},50);
                }
                else
                {
                    clearInterval(task3);
                    return;
                }
            }, 50 / speed, event);

            setTimeout(function ()
            {
                if(finish[GODSFALL] == false)
                {
                    clearInterval(task3);
                    finish[GODSFALL] = true;
                }
            }, 300 / speed, event);
        }

        return;
    });

    mod.hook('S_ACTION_END', 5, (event) =>
    {
        if(playerId != event.gameId){return;}
        if(job != JOB_VALK){return;}
        if(mod.settings.DEBUG)
        {
            console.log(TAG + 'S_ACTION_END: ' + event.skill.id);
            console.log(TAG + 'S_ACTION_END PLAYER: ' + event.gameId);
        }

        if(event.skill.id == S_GODSFALL)
            finish[GODSFALL] = true;
        else if(event.skill.id == S_LEAPING_SLASH_0 || event.skill.id == S_LEAPING_SLASH_1 || event.skill.id == S_LEAPING_SLASH_2 || event.skill.id == S_LEAPING_SLASH_3)
            finish[LEAPING_SLASH] = true;
        else if(event.skill.id == S_WINDSLASH_0 || event.skill.id == S_WINDSLASH_1 || event.skill.id == S_WINDSLASH_2 || event.skill.id == S_WINDSLASH_3)
            finish[WINDSLASH] = true;
        else if(event.skill.id == S_DARK_HERALD_0 || event.skill.id == S_DARK_HERALD_1)
            finish[DARK_HERALD] = true;

        return;
    });
}