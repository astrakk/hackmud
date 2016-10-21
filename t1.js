function (context, args){
	var fs = #s.scripts.fullsec();
	var npc = ["amal_robo.", "archaic.", "arino.", "blackstar.", "bluebun.", "bunnybat_hut.", "context.", "core.", "cyberdine.", "empty_nest.", "futuretech.", "halperyon.", "kill_9_1.", "kill_bio.", "legion_bible.", "legion_intl.", "light.", "lowell_extermination.", "marco_polo.", "merrymore_pharma.", "nation_of_wales.", "nuutec.", "protein_prevention.", "ros13", "ros_13_update_checker.", "setec_gas.", "sn_w.", "soylentbean.", "suborbital_airlines.", "tandoori.", "the_holy_checksum.", "turing_testing.", "tyrell.", "vacuum_rescue.", "welsh_measles_info.", "weyland.", "world_pop."];
	var i, x, log = [];

	for(i = 0; i < fs.length; ++i){
		for(x = 0; x < npc.length; ++x){
			if(fs[i].indexOf(npc[x]) === 0)
			{
				log.push(fs[i]);
			}
		}
	}
	return log;
};
