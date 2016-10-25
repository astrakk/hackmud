function(context, args){// t1:"", t2:""
	var dbcmd = ["show","navigation","entry","action","open","command","process","cmd","get","nav","see"];
	var dbopt = ["updates","news_posts","developments","core","news", "happening","latest","posts","blog"];
	var dbnames = ["tchalla","wonderous_steve","daa_freak","frantimike","poitier_27","jack_sparrow","catness","amelie","3rd_3y3_grill","be_lavar","bella_swan","bobranator","boris","corgitruthsayer","chad_bose","cking","c_vader","daurmith","diamond_dogz","firebreathingdragon","free_man_morg","hermione","ice_ventura","indie_jones","inigo","jamesb","jermaine","juno_macguff","leon","luke_5kywalker","m_clarke_dunk","mjay_m_walker","oz","pugluv4vr","rocky_b","sammy_l_jack","shawn_aa","sportsfan2031","thedude","thegreat","thepowerful","troy_cole","whois_hermano","wiley_curry","will_de_vaughn","youngtwokay","madthugpug","m_poppins","runningman23","corg_train","shareef_j","delete_me_first","geyser_soze","d4ria","terrance_cruz"];
	var lib = #s.scripts.lib();
	var i, a, done = false, names = [], log = [];
	
	if(!args || !args.t1 && !args.t2 && !args.username){
		var fs = #s.scripts.fullsec();
		var hs = #s.scripts.highsec();
		var npc = ["amal_robo","archaic","arino","blackstar","bluebun","bunnybat_hut","context","core","cyberdine","empty_nest","futuretech","halperyon","kill_9_1","kill_bio","legion_bible","legion_intl","light","lowell_extermination","marco_polo","merrymore_pharma","nation_of_wales","nuutec","protein_prevention","ros13","ros_13_update_checker","setec_gas","sn_w","soylentbean","suborbital_airlines","tandoori","the_holy_checksum","turing_testing","tyrell","vacuum_rescue","welsh_measles_info","weyland","world_pop"];
		var i, x, a, m = 0, log = [];

		for(i = 0; i < fs.length; ++i){
			for(x = 0; x < npc.length; ++x){
				if(fs[i].indexOf(npc[x]+".") === 0){
					for(a = 0; a < hs.length; ++a){
						if(hs[a].indexOf(npc[x]+".") === 0){
							log.push(fs[i] + "\n"+hs[a]+"\n");
							++m
		}}}}}
		log.push("FULLSEC Scanned: "+i+ "\nHIGHSEC Scanned: "+a+ "\nMatches Found: "+m);
		return log;
	} else if(args && !args.t1 || !args.t2){
		return "Don't forget to specify T1 and T2 script names with !t1! and !t2! keys.";
	} else if(args && args.t1 && args.t2 && !args.username){ //Args provided. t1 must provide. t2 must provide. username not provide

		for(i = 0; i < dbcmd.length; ++i){
			if(args.t1.call({}).indexOf(dbcmd[i] + ":") > -1 && done != true){
				var key = dbcmd[i];
				done = true;
		}}
		done=false;
		for(i = 0; i < dbopt.length; ++i){
			if(args.t1.call().indexOf(dbopt[i] + " |") > -1 && done != true){
				var val = dbopt[i];
				done = true;
		}}
		var t1 = args.t1.call({[key]:val});
		for(i = 0; i < t1.length; ++i){
			for(a = 0; a < dbnames.length; ++a){
				if(t1[i].indexOf(dbnames[a]) > -1){
					names.push(dbnames[a]);
		}}}
		done=false;
		for(i = 0; i < dbcmd.length; ++i){
			for(a = 0; a < names.length; ++a){
				if(args.t2.call({username:names[a]}).indexOf("!"+dbcmd[i]+"!") > -1 && done != true){
					var key2 = dbcmd[i];
					done = true;
		}}}
		names.push("\nNow add a !username! key with the username you want to retrieve the QR codes for.");
		return names;
	} else if(args && args.t1 && args.t2 && args.username){
		done=false;
		for(i = 0; i < dbcmd.length; ++i){
			if(args.t2.call({username:args.username}).indexOf("!"+dbcmd[i]+"!") > -1 && done != true){
				var key2 = dbcmd[i];
				done = true;
		}}
		return args.t2.call({username:args.username, [key2]:"order_qrs"});
	}
	
	return("How... how are you reading this? What the hell?");
};