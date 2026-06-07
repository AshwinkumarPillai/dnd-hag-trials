/* ============ THE CASE SCRIPT ============
   Transcribed from "Clone of THE RECORD.md".
   Scene fields:
     who      sprite key (judge/defense/strahd/ibai/ashborn/ireena/irina/magda/morgantha/trygve)
     name     nameplate text
     pos      background (judge/witness/defense/prosecution)
     text     dialogue (auto-paginated by the engine)
     green    testimony-green text
     q        question/exhibit chip (e.g. "IB-01")
     chapter  marks a chapter start (title used in Court Record jump list)
     banner   full-screen card text
     fx       "objection" — shows the bubble before the speaker's line
     evidence { id, title, desc } — evidence popup, added to Court Record
     verdict  { target, word, type } — verdict stamp (type: guilty/notguilty/neutral)
*/

const D = (text) => ({ who: "defense", name: "Defense", pos: "defense", text });
const J = (text) => ({ who: "judge", name: "Judge", pos: "judge", text });

const SCRIPT = [

// ============================ OPENING ============================
{ chapter: "Opening", banner: "THE HAG TRIALS\n✦ Turnabout Bonegrinder ✦" },

J("Court is now in session for the trial concerning the incident at the windmill known as Old Bonegrinder."),
J("Under examination: Ibai, Ashborn, cardboard-Trygve, Irina, and Ireena — hereafter 'the party'... and Morgantha, Offelia, and Belladonna — hereafter 'the hags'."),
J("Is the defense ready?"),
D("Ready, Your Honor. Though first, one small thing for the record... I'm not a lawyer, S. von Z.; please don't sue me; none of this is legal advice."),
{ who: "strahd", name: "S. von Zarovich", pos: "prosecution", text: "...The prosecution makes no promises. Proceed." },

D("There are three types of justified use of force in self-defense outlined in Barovian law: defense of a person, outlined in Barovian Code § 16-3-21; defense of a habitation, outlined in Code § 16-3-23; and defense of property, outlined in Code § 16-3-24."),
D("We demonstrate that the hags' use of force against the party is not protected by any of these forms of justification, and therefore constitutes assault against the relevant victims."),
D("We additionally show that Ibai's use of force against the hag Morgantha is justified under Code § 16-3-21, defense of a person. Once we have demonstrated these facts, we will then investigate the justification or lack thereof for the actions of each individual under examination."),

// ============================ PART 1: LAWFUL ENTRY ============================
{ chapter: "Part 1 — The Lawful Entry", banner: "PART 1\nThe Lawful Entry" },

D("Firstly, the bard Ibai's entry into the property was lawful and constitutes neither trespass nor burglary."),
D("Ibai knocked on the door of the house, intending to enter to discuss a possible hag deal and to perform, and Morgantha opened the door to answer the knock. Ibai, believing he had permission to enter, proceeded to enter the house and begin his performance by backflipping over Morgantha."),

{ banner: "WITNESS TESTIMONY\n— Ibai —" },
D("The defense calls the bard Ibai to the stand."),
{ who: "defense", name: "Defense", pos: "defense", q: "IB-01", text: "How would you describe Morgantha's body language when she answered the door?" },
{ who: "ibai", name: "Ibai", pos: "witness", green: true, q: "IB-01", text: "Morgantha opened the door like an old granny receiving guests, not like a fortress commander repelling invaders. She did not shout at us to leave, didn't exactly say entry was forbidden, did not slam the door, and did not present herself as someone under immediate threat. If anything, she seemed initially inviting to me man, or at least willing to hear us out. I had also met her before in her kindly old woman guise who handed us free pastries, so my impression of her at her current guise was, regrettably, \"strange but approachable pastry grandmother,\" not Django from Django Unchained." },
{ who: "defense", name: "Defense", pos: "defense", q: "IB-02", text: "Did you believe that you had her implicit permission to enter the house?" },
{ who: "ibai", name: "Ibai", pos: "witness", green: true, q: "IB-02", text: "Err, listen, it felt like so to me atleast? She opened the door, did not forbid entry, did not tell me to leave, and did not clearly block the doorway in a way I understood as refusal. Given that we had met her before under friendly circumstances, I believed we were being allowed to speak with her. I entered dramatically, yes, but dramatic entry is not the same thing as unlawful entry. It is merely the burden of being a bard." },
{ who: "ibai", name: "Ibai", pos: "witness", green: true, q: "IB-02", text: "Furthermore, I am an up and coming superstar performer, an entertainer at heart. She always had that monstrous form ready, if she wanted to she could swing me out of the house with a mere thought probably. Is this about the backflip? Come on man this is why artists commit self-cide in Barovia, probably a bigger cause than Strahd himself honestly. Go ahead, stump out another artistic heart, let another real entertainer just fade away. I'd rather be at a place where I am respected, you know?" },
{ who: "defense", name: "Defense", pos: "defense", q: "IB-03", text: "What was your intention upon entering the house?" },
{ who: "ibai", name: "Ibai", pos: "witness", green: true, q: "IB-03", text: "My intention was SIMPLY to speak with Morgantha and her coven mates, perform my song, reduce tension through art, and explore whether some sort of deal or information could be obtained. Is the age of art truly gone? I mean from where I come from my words would have gotten me what we call an 'Brammy Award'." },
{ who: "ibai", name: "Ibai", pos: "witness", green: true, q: "IB-03", text: "Anyway, we had previously known Morgantha as an old woman who gave out pastries, and at that time we believed that as far as she was in her guise, her behavior was to be hospitality, not evidence of a children-to-baked-goods pipeline. I did not enter with the intent to steal, injure, or attack anyone. I entered as a performer and negotiator, with choreography that would give the great Maekelk Jack's Son a run for his money." },

{ banner: "WITNESS TESTIMONY\n— Ireena —" },
{ who: "defense", name: "Defense", pos: "defense", q: "IK-01", text: "Describe Morgantha's body language when she opened the door." },
{ who: "ireena", name: "Ireena", pos: "witness", green: true, q: "IK-01", text: "She looked inviting initially, once Ibai backflipped over her I ran past up the stairs. I think she looked confused as I ran past." },

{ banner: "STATEMENT\n— Ashborn —" },
{ who: "ashborn", name: "Ashborn", pos: "witness", green: true, q: "AB-01", text: "When Ibai entered they didnt tell him to get out or that we were trespassing, i joined after I saw they were willing to have us inside and I entered like a normal person." },

D("By Barovian law, unlawful entry to a dwelling can occur in two ways: a felony burglary or a misdemeanor criminal trespass."),
D("For a burglary to occur in a dwelling, by Code § 16-7-1-b, a person must enter or remain within it without authority and with intent to commit a felony or theft therein. Ibai entered with the implied permission of Morgantha, an adult occupant of the house, and had no intentions of committing felony or theft within the dwelling."),
D("For a criminal trespass to occur, by Code § 16-7-21, a person must either intentionally damage the property of another without consent, enter the premises of another for an unlawful purpose, enter the premises of another after receiving notice that such entry is forbidden, or remain on the premises of another after receiving notice to depart."),
D("No property was damaged before the acts of violence committed by Morgantha. No occupant of the property refused Ibai entry; and indeed, Morgantha's body language may have suggested that entry was permitted. Likewise, no occupant of the property requested that Ibai leave after he entered the premises."),
D("After Ibai entered the property lawfully, the rest of the party saw Morgantha back away from the door, leaving the doorway open and implicitly giving them permission for entry."),
D("All four of these individuals also entered the premises, lawfully and without immediate intention to commit crimes within, and without receiving any notice to leave from its occupants. None of the five individuals trespassed or committed burglary by entering the dwelling."),

// ============================ PART 2: THE HAGS' CRIMES ============================
{ chapter: "Part 2 — The Hags' Crimes", banner: "PART 2\nThe Crimes of the Coven" },

D("Secondly, the party has reason to believe that the hags were using the windmill to commit several felony crimes: the continued aggravated assault against the Barovian refugee Franz, and the ongoing kidnapping and potential cruelty to children or malicious murder of Franz's children, Fyodor and Myrtle."),
D("On Nevayr 4th, the party received an anonymous tip that a night hag was seen near the Barovian refugee camp near Vallaki. On the evening of Nevayr 4th, the party visited the same camp. The ordained cleric Irina visited the camp's first-aid tent and helped to treat a man with unconsciousness and high fever."),

{ banner: "STATEMENT\n— Irina —" },
{ who: "irina", name: "Irina", pos: "witness", green: true, q: "IP-01", text: "I believe he was likely to survive the night, but unlikely to survive his condition indefinitely without intervention. His symptoms were consistent with a night hag's Nightmare Haunting." },

D("As multiple night hag covens rarely coexist in the same area, it is possible that this man's life-threatening condition was caused by one of the hags in question."),
D("Franz and his children were last known to be near the hags' dwelling before his illness, and Morgantha's appearance after dropping her glamour is consistent with that of a night hag. It is then reasonably possible that Morgantha and her two daughters are night hags and responsible for Franz's illness."),
D("A Nightmare Haunting from a night hag can be and often is deadly, being the means through which a night hag collects souls."),
D("According to Code § 16-5-21-a-2, any assault — an attempt to commit a violent injury to another person, or any act which places another in reasonable apprehension of the same, by Code § 16-5-20-a-1,2 — which uses any device that is likely to or does result in serious bodily injury constitutes, at minimum, aggravated assault."),
D("If the hags caused Franz's condition through a Nightmare Haunting, then any individuals responsible have committed aggravated assault through the use of the Nightmare Haunting. It is also very possible, given Franz's very serious condition, that there was additionally intent to murder Franz behind the action."),
D("In addition to Franz's condition, the party is aware of the recent disappearance of Franz's children, Fyodor and Myrtle. The party was informed on Nevayr 4th that the children had been seen leaving with Franz in the direction of the hags' dwelling, and that while Franz returned to the refugee camp near Vallaki, the children did not return with him."),

{ banner: "WITNESS TESTIMONY\n— Magda, Franz's wife —" },
{ who: "defense", name: "Defense", pos: "defense", q: "FW-00", text: "For the record, are you Magda, wife of Franz?" },
{ who: "magda", name: "Magda", pos: "witness", green: true, q: "FW-00", text: "Yes I am Magda, Franz's wife." },
{ who: "defense", name: "Defense", pos: "defense", q: "FW-01", text: "When did you last see Myrtle and Fyodor?" },
{ who: "magda", name: "Magda", pos: "witness", green: true, q: "FW-01", text: "Nevayr 1st." },
{ who: "defense", name: "Defense", pos: "defense", q: "FW-02", text: "Was Franz with them at that time?" },
{ who: "magda", name: "Magda", pos: "witness", green: true, q: "FW-02", text: "He left the camp with them." },
{ who: "defense", name: "Defense", pos: "defense", q: "FW-03", text: "Did Franz inform anyone of his destination?" },
{ who: "magda", name: "Magda", pos: "witness", green: true, q: "FW-03", text: "He didn't tell me." },
{ who: "defense", name: "Defense", pos: "defense", q: "FW-04", text: "Which direction did Franz go when he left the refugee camp with the children?" },
{ who: "magda", name: "Magda", pos: "witness", green: true, q: "FW-04", text: "He left to the East." },
{ who: "defense", name: "Defense", pos: "defense", q: "FW-05", text: "When did Franz return?" },
{ who: "magda", name: "Magda", pos: "witness", green: true, q: "FW-05", text: "He came home late that night. He was such a wreck *sob*" },
{ who: "defense", name: "Defense", pos: "defense", q: "FW-06", text: "Were Fyodor and Myrtle with Franz when he returned?" },
{ who: "magda", name: "Magda", pos: "witness", green: true, q: "FW-06", text: "No. They Were GONE." },
{ who: "defense", name: "Defense", pos: "defense", q: "FW-07", text: "Did Franz tell you why the children did not return with him?" },
{ who: "magda", name: "Magda", pos: "witness", green: true, q: "FW-07", text: "He.... he said that......." },

{ who: "strahd", name: "S. von Zarovich", pos: "prosecution", fx: "objection", text: "Hearsay, Your Honor! The witness is recounting the words of another!" },
{ who: "strahd", name: "S. von Zarovich", pos: "prosecution", text: "...Hmph. On consideration... the prosecution withdraws the objection. Let the widow speak." },
J("The objection is withdrawn. The witness may continue."),

{ who: "magda", name: "Magda", pos: "witness", green: true, q: "FW-07", text: "He ... said that..... old Ms. Morgantha offered to give him a dozen pastries if he brought his kids with him to the woods. She....She took them, and is doing Pelor knows what with them!" },
{ who: "defense", name: "Defense", pos: "defense", q: "FW-08", text: "Did you give your permission, as a guardian of the children, for them to be given into the custody of the individuals Morgantha, Belladonna, and Offelia?" },
{ who: "magda", name: "Magda", pos: "witness", green: true, q: "FW-08", text: "NO!" },

D("Evidence Item 01 is to be shown to the court."),
{ evidence: { id: "ev01", title: "EVIDENCE ITEM 01", desc: "A sketch of the young male child who was retrieved from the upper levels of the hags' dwelling." } },
D("Evidence Item 02 is to be shown to the court."),
{ evidence: { id: "ev02", title: "EVIDENCE ITEM 02", desc: "A sketch of the young female child who was retrieved from the upper levels of the hags' dwelling." } },

{ who: "defense", name: "Defense", pos: "defense", q: "FW-09", text: "Do you recognize any of the individuals depicted in these sketches?" },
{ who: "magda", name: "Magda", pos: "witness", green: true, q: "FW-09", text: "These are my children! Do you... do you have them?!" },
{ who: "defense", name: "Defense", pos: "defense", q: "FW-10", text: "How do you know these individuals, who left the upper levels of the hags' dwelling via a rope and the party's assistance?" },

{ who: "strahd", name: "S. von Zarovich", pos: "prosecution", fx: "objection", text: "Leading question! Counsel is testifying for the witness." },
{ who: "defense", name: "Defense", pos: "defense", text: "...The question is withdrawn, Your Honor." },

{ banner: "WITNESS TESTIMONY\n— Ireena —" },
{ who: "defense", name: "Defense", pos: "defense", q: "IK-02", text: "Do you recognize the individuals shown in Evidence Items 01 and 02?" },
{ who: "ireena", name: "Ireena", pos: "witness", green: true, q: "IK-02", text: "Yes. Those are the kids I saved." },
{ who: "defense", name: "Defense", pos: "defense", q: "IK-03", text: "Describe what you saw upstairs, in the hags' dwelling." },
{ who: "ireena", name: "Ireena", pos: "witness", green: true, q: "IK-03", text: "They [the children] were sitting in the corner of the top floor behind a rusted iron door." },
{ who: "defense", name: "Defense", pos: "defense", q: "IK-04", text: "Were any of the children injured? Please describe any injuries and apparent age of injuries." },
{ who: "ireena", name: "Ireena", pos: "witness", green: true, q: "IK-04", text: "They both had partially healed cuts around their hands. One has what looks like rug burn across neck and arms." },

D("Both Fyodor and Myrtle, the children of Franz and his wife, were found in the upper levels of the hags' dwelling. They were not brought to the hags' dwelling with their mother's permission, and they were held there against the will of and without the knowledge of their only presently capable legal guardian."),
D("These circumstances constitute kidnapping under Code § 16-5-40: the children were abducted without lawful authority or warrant, moved to the upper levels of the hags' dwelling in order to lessen the risk of detection, and held against their and their guardians' wills."),
D("The third crime the hags have committed is that of criminal conspiracy, outlined in Code § 16-4-8, towards the malicious murder of the children Fyodor and Myrtle."),
D("After the initial use of force by the hags towards Ashborn and Ibai, the hags then discussed and offered a deal to the two, in which they would cause the two bad dreams, potentially matching the symptoms of a Night Haunting, which would then be treated by the administration of 'dream pastries.'"),
D("When pressed for details on these 'dream pastries' and the potential drawbacks of such a deal, the hags admitted that the flour for these pastries would be made from the bodies of the two children."),

{ banner: "WITNESS TESTIMONY\n— Ashborn —" },
{ who: "defense", name: "Defense", pos: "defense", q: "AB-02", text: "Please describe the deal offered to you by the hags." },
{ who: "ashborn", name: "Ashborn", pos: "witness", green: true, q: "AB-02", text: "The hags offered us pastries made from children." },
{ who: "defense", name: "Defense", pos: "defense", q: "AB-03", text: "Were you willing to consider such a deal?" },
{ who: "ashborn", name: "Ashborn", pos: "witness", green: true, q: "AB-03", text: "Not at all." },
{ who: "defense", name: "Defense", pos: "defense", q: "AB-04", text: "Did you feel that the hags intended imminent harm on the children in their care?" },
{ who: "ashborn", name: "Ashborn", pos: "witness", green: true, q: "AB-04", text: "I believe so. I mean you can't make \"children pastries\" without harming them." },

D("If the hags did intend to kill Fyodor and Myrtle and turn them into pastries, this process would cause the two children's deaths. As the hags kidnapped the two children for this express purpose, their actions also comprise evidence of express malice under Code § 16-5-1-b: deliberate intention unlawfully to take the life of another being."),
D("If the hags were successful in these planned actions, then they would be guilty of malicious murder. The hag coven, working together, performed such acts as kidnapping children specifically to murder them. They are therefore guilty as a group of criminal conspiracy to the felony of murder, in accordance with Code § 16-4-8."),
D("We can conclude that the hags are guilty of the felony of aggravated assault against Franz and the felony of kidnapping against Myrtle and Fyodor. It is also, in light of current evidence, reasonable to believe that the hags are guilty of conspiracy to malicious murder."),
D("These felonies will become relevant in the discussion of the hags' use of violence against individuals of the party."),

// ============================ PART 3: FIRST BLOOD ============================
{ chapter: "Part 3 — The First Spells", banner: "PART 3\nThe First Spells" },

D("The first instances of violence against individuals of the party were a simultaneous Ray of Sickness spell cast by Morgantha on Ibai, and a Hold Person spell cast by one of the other coven hags — henceforth referred to as 'Daughter A' — on Ashborn."),
D("Ray of Sickness is a spell that can cause both significant poison damage and the poisoning status. Morgantha accompanied this spell with a yet-unidentified chemical attack on Ibai that seems to have caused a more profound poisoning than a standard Ray of Sickness spell."),
D("Depending on the strength of the Ray of Sickness cast and the nature of the chemical substance used, if Morgantha's acts of violence are not found to be justified, they may either constitute aggravated assault under Code § 16-5-21-a-2, or assault under Code § 16-5-20-a-1."),
D("Hold Person is a non-damaging spell that can cause paralysis to its target, making it a more aggressive form of restraint than grappling a person. While Hold Person does not cause physical injuries, its effects forcefully restrain its target, and may have placed Ashborn under reasonable apprehension of receiving an injury, especially as a paralyzed target is especially vulnerable to injury."),
D("If so, then the Hold Person spell, if not justified, constitutes assault under Code § 16-5-20-a-2."),

{ banner: "WITNESS TESTIMONY\n— Ibai —" },
{ who: "defense", name: "Defense", pos: "defense", q: "IB-04", text: "Please describe the effects of the first spell that was cast on you." },
{ who: "ibai", name: "Ibai", pos: "witness", green: true, q: "IB-04", text: "Morgantha struck me with magic that immediately harmed and poisoned me. It was not a warning, not a request to leave, not a shove. Contrary to what I had learnt at school about hags being tough cookies, she clearly was offended at my diss track. I mean back where I come from people would reply to a track with their own but stooping to this? It was an attack. I felt the injury and the poison take effect, and I understood that she had escalated the situation from words and performance into violence. Freedom of speech? What a joke." },
{ who: "defense", name: "Defense", pos: "defense", q: "IB-05", text: "Would you say that you have been injured by effects of the first spell cast on you?" },
{ who: "ibai", name: "Ibai", pos: "witness", green: true, q: "IB-05", text: "Yes. I was physically injured and poisoned by Morgantha's spell. I remained standing, speaking, and tragically handsome, but I had absolutely been harmed." },
{ who: "defense", name: "Defense", pos: "defense", q: "IB-06", text: "Were you or any of the party attempting to injure any of the hags before the time of the first spell cast on you?" },
{ who: "ibai", name: "Ibai", pos: "witness", green: true, q: "IB-06", text: "No. Before Morgantha attacked me, I had not attempted to injure any of the hags, and I did not see any party member attempt to injure them either. We were speaking and performing, making magic. The harshest weapon used by the party up to that point was rhymes, and while rhyme can wound the ego, it is not usually treated as lethal force. I get it, if I were a big name you wouldn't be asking me this. Morgantha WOULD BE IN JAIL." },

{ banner: "WITNESS TESTIMONY\n— Ashborn —" },
{ who: "defense", name: "Defense", pos: "defense", q: "AB-05", text: "Please describe the effects of the spell that was cast on you." },
{ who: "ashborn", name: "Ashborn", pos: "witness", green: true, q: "AB-05", text: "I was talking to the hags. We were about to have a conversation. I didn't have any weapons armed, neither did I show any intent of violence. All I wanted to do was talk to them and they ignored all of that cast a freezing spell on me. I didn't have enough time to react. I was frozen unable to move. Feeling everything, seeing all. Like a vegetable. It was humiliating. And I heard them say that they were going to kill both of us. Rendering me motionless was only to torture me." },
{ who: "defense", name: "Defense", pos: "defense", q: "AB-06", text: "After the spell was cast on you, did you believe that one of the hags intended to cause you injury?" },
{ who: "ashborn", name: "Ashborn", pos: "witness", green: true, q: "AB-06", text: "Yes." },
{ who: "defense", name: "Defense", pos: "defense", q: "AB-07", text: "Were you or any of the party attempting to injure any of the hags before the time of the spell cast on you?" },
{ who: "ashborn", name: "Ashborn", pos: "witness", green: true, q: "AB-07", text: "Not at all. Both Ibai and I were simply having a rap discourse. To add to that, both Ibai and I verbally told them that we just want to talk and would appreciate it if they would 'roast' us back." },

D("Both spells cast in the situation here described fit neither the criteria for defense of a person outlined in Barovian Code § 16-3-21; nor defense of a habitation outlined in Code § 16-3-23; nor defense of property outlined in Code § 16-3-24."),
D("Force used in defense of a person in compliance with Code § 16-3-21-a requires the person attempting such a defense to reasonably believe that such threat or force is necessary to defend either that person or a third person against another's imminent use of unlawful force."),
D("None of the party members had, in speech or in body language, given any reason to believe such force was imminent. The 'disstract' submitted in evidence was derogatory, but did not represent a reasonable threat towards any of the hags."),
D("No other verbal discussion occurred that would constitute a threat towards the hags, and no body language indicating an imminent use of force against any of the hags or members of their household was made by any individual of the party."),
D("Additionally, force used in defense of a person is only justified under Code § 16-3-21 if the person using the force is not attempting to commit, actively committing, or fleeing after the commission or attempted commission of a felony (Code § 16-3-21-b-2)."),
D("The hags' aggravated assault against Franz and kidnapping and conspiracy to malicious murder of Myrtle and Fyodor therefore invalidate any claim they may make towards justification of these actions by defense of a person."),
D("A justification of defense of a habitation under Code § 16-3-23 requires that such force used against another person is reasonably believed to be necessary to prevent such other's unlawful entry or attack upon a habitation."),
D("The party lawfully entered the hags' dwelling with no intention of committing any crime and was at no point given notice to leave said dwelling. No damage or attack upon the property occurred or was reasonably likely to occur at the time Daughter A and Morgantha acted. As such, there is no evidence that a use of force against any of the individuals of the party by the hags constituted defense of a habitation."),
D("Ireena and Irina did take some actions which the hags may attempt to construe as interference with their property. The two, while invisible and undetected, moved to the apparently open-to-guests upper levels of the hags' dwelling. Irina, while invisible and undetected, read the hag coven's contract. Irina left the contract and the upstairs in the exact condition as when she entered."),
D("While in other jurisdictions such as the Feywild, the knowledge of a name may be considered property which can be stolen, in Barovia, under this court and laws, knowledge of a name is not considered property as defined by Code § 44-1-1. As such, the accusation of theft by taking by nature of Irina's learning of the hags' names is not a valid criminal accusation."),
D("While the hags may argue that Ireena and Irina committed theft by taking by freeing the children Fyodor and Myrtle, we have established that these children were kidnapped by the hags. They were not under the lawful guardianship of the hags, and were not the lawful property of the hags."),
D("As the children were not the property of the hags or of any individual hag, they do not constitute property being unlawfully taken or appropriated from the hags."),
D("As neither of these potential interference with property claims could reasonably be considered interference with the hags' lawful property, and as the hags could not have reasonably even been aware of these actions at the time of the violence, neither action could have founded a reasonable belief that the hags' violent actions were needed to prevent interference with their lawful property."),
D("Force used against a person in defense of property under Code § 16-3-24 requires the reasonable belief that such force is necessary to prevent or terminate the person's trespass on or tortious or criminal interference with either land property other than a habitation or personal property lawfully held."),
D("Once again, no damage to any of the hags' property, including the property within their dwelling, occurred or seemed reasonably likely to occur at or before the time of Daughter A's and Morgantha's actions. As such, there is also no evidence that this spellcasting constituted the defense of property."),

// ============================ PART 4: THE DEAL & THUNDERWAVE ============================
{ chapter: "Part 4 — The Deal & the Thunderwave", banner: "PART 4\nThe Deal & the Thunderwave" },

D("After these actions, Ibai attempted to deescalate the situation. He explained to the hags that they had entered in hopes of making a deal with the hags, as hag covens are known to do so fairly regularly, and that the song was intended as an enjoyable performance of art."),
D("As we described when discussing the hags' potential intentions towards the children Fyodor and Myrtle, the hags offered Ibai, and the party by proxy, a deal to make amends for the hostilities."),
D("The deal was described as follows: The party would give the hags some of their dreams, resulting in terrible sleep. The party would receive pastries from the hags that would give them good dreams to aid in their sleep. When Ibai asked for the return of the missing children Fyodor and Myrtle, the hags claimed that they would give the children to the party."),
D("When Ibai pressed the hags for additional information, they admitted that the children would only be returned after being killed, turned into flour, and baked into the pastries that the hags would attempt to convince the party to eat. As such, accepting such a 'deal' would make the party accessory to the hags' possible crimes."),
D("Additionally, this statement gave the party reasonable cause to believe that the hags both held Fyodor and Myrtle and intended the murder of the same."),

{ banner: "WITNESS TESTIMONY\n— Ashborn —" },
{ who: "defense", name: "Defense", pos: "defense", q: "AB-08", text: "Do you believe that any of the hags was likely to kill the children Fyodor and Myrtle soon if no action was taken?" },
{ who: "ashborn", name: "Ashborn", pos: "witness", green: true, q: "AB-08", text: "In my understanding, yes. They were going to kill the children and they did hint at that after freezing me and attacking Ibai." },
{ who: "defense", name: "Defense", pos: "defense", q: "AB-09", text: "Do you believe that any of the hags was likely to harm any of the party if no action was taken and the 'deal' was rejected?" },
{ who: "ashborn", name: "Ashborn", pos: "witness", green: true, q: "AB-09", text: "Yes. They were going to kill me and Ibai if not all." },

{ banner: "WITNESS TESTIMONY\n— Ibai —" },
{ who: "defense", name: "Defense", pos: "defense", q: "IB-07", text: "Do you believe that any of the hags was likely to kill the children Fyodor and Myrtle soon if no action was taken?" },
{ who: "ibai", name: "Ibai", pos: "witness", green: true, q: "IB-07", text: "My brother in Markov, ABSOLUTELY YES. I mean they shot me for spewing rhymes. When the hags explained that the children would be returned to us as ingredients in pastries, I understood that as a direct and credible threat to the children's lives. One does not become flour through a misunderstanding." },
{ who: "ibai", name: "Ibai", pos: "witness", green: true, q: "IB-07", text: "At that point, the earlier memory of Morgantha handing out pastries became horrifying rather than quaint. I almost puked. SHE SHOULD BE SUED BY THE HEALTH MINISTRY BUT INSTEAD I AM ON TRIAL. The children were in the hags' custody, the hags had already used force against us, and the deal they described depended on the children being dead. I believed the children were in immediate danger." },
{ who: "ibai", name: "Ibai", pos: "witness", green: true, q: "IB-07", text: "And trust me, as much as I am a performer at heart, I am not going to compromise with the lives of children. I tried as much as possible to make them understand what I was doing was art, and that I came here to talk not to fight. They were toying with me. They never intended to talk from what I faced." },
{ who: "defense", name: "Defense", pos: "defense", q: "IB-08", text: "Do you believe that any of the hags was likely to harm any of the party if no action was taken and the 'deal' was rejected?" },
{ who: "ibai", name: "Ibai", pos: "witness", green: true, q: "IB-08", text: "Absolutely. By that point, Morgantha had already attacked and poisoned me, Ashborn had already been magically restrained, and the hags had offered us a coercive bargain involving nightmares, pastries, and dead children. I believed that refusing the deal would likely result in further violence against us." },
{ who: "ibai", name: "Ibai", pos: "witness", green: true, q: "IB-08", text: "They had already shown they were willing to use force before any of us attacked them, so I had every reason to believe they would use force again once we rejected being made accessories to child murder. I mean honestly, the next thing I expected from them was being force fed the pastries and being forced to write a 5 star yelp review." },

D("At the time Ibai cast Thunderwave, the hags had already assaulted both Ibai and Ashborn, attempted to make them complicit in their crimes against children through coercion, and made clear their intent to harm the children Fyodor and Myrtle, as well as their intent to harm Ibai and Ashborn should they reject the coercive and criminal 'deal' the hags offered."),
D("Ibai reasonably believed that action was necessary to prevent such unlawful force against himself, Ashborn, Fyodor, Myrtle, and potentially also the rest of the party. Such unlawful force could reasonably be expected to include the deaths of Fyodor and Myrtle and death or great bodily harm done to Ibai and Ashborn."),
D("Thunderwave, at the maximum possible level Ibai could cast, can deal at the absolute most 32 'points' of damage. A night hag in the Barovia where these events occurred has at minimum 112 'points' of health."),
D("Therefore, Ibai's Thunderwave physically could not 'bloody' Morgantha, the night hag whom it hit; and its area of effect was chosen to include only Morgantha, the seeming instigator of the coven's crimes."),
D("As such, Ibai's cast Thunderwave was neither intended nor able to cause death or great bodily harm to Morgantha, any of the hags, any of the hags' household, or any other nearby individuals."),
D("Under the circumstances, in which Ibai could reasonably believe his actions were necessary to prevent, at minimum, the murders of Fyodor and Myrtle, under Code § 16-3-21-a, Ibai would have been justified in using even force intended to cause death or great bodily harm, despite his chosen spell being unable to cause either."),
D("There are only three exceptions, outlined under Code § 16-3-21-b, to the use of force justified in defense of a person."),
D("Firstly, under Code § 16-3-21-b-1, a person may not use such force if they intentionally provoke a use of force against themself with the intent to use such force as an excuse to inflict bodily harm upon the assailant."),
D("The 'disstract' available as evidence for this case was a friendly 'roast' and was not intended as provocation for such force, as previously testified by the party members. It also does not justify such use of force by the hags against the party."),
D("No other actions were taken by Ibai or Ashborn that could in any way be construed as intentional provocation of the hags; indeed, it is evident that Ibai, the only party member at the time able to speak due to the continuing Hold Person spell in effect on Ashborn, attempted to deescalate the situation until it became obvious that deescalation was not legally or ethically possible."),
D("Secondly, under Code § 16-3-21-b-2, use of force in defense of a person is not justified when the person using force is attempting to commit, committing, or fleeing after the commission or attempted commission of a felony. Ibai, Ashborn, and the entire party had not committed and were not attempting to commit any crimes at the time of the Thunderwave cast. As such, this exception does not apply to the use of Thunderwave against Morgantha."),
D("Lastly, under Code § 16-3-21-b-3, use of force in defense of a person is not justified when the person using force is the aggressor or was engaged in combat by agreement unless they withdraw from the encounter. There was no such agreement, and we have established that there is no reasonable defense for the hags' initial actions against Ibai and Ashborn."),
D("As such, Ibai was not the aggressor in the encounter, and this exception does not apply to his use of Thunderwave."),
D("Three instances of violent action occurred in the timeframe in question in this investigation: the Hold Person cast by Daughter A on Ashborn, the Ray of Sickness spell and simultaneous chemical attack performed by Morgantha against Ibai, and the Thunderwave cast by Ibai on Morgantha."),
D("We assert and have presented evidence that both Daughter A's Hold Person and Morgantha's dual attack were not justified under defense of a person, habitation, or property, and are therefore each some degree of assault."),
D("We have additionally shown that Ibai's Thunderwave is justified, as it was taken in defense of himself, Ashborn, Fyodor, and Myrtle, and may have also been in defense of the remainder of the party. We will now present a case for each individual who is covered by these proceedings."),

// ============================ PART 5: THE VERDICTS ============================
{ chapter: "Part 5 — The Verdicts", banner: "PART 5\nThe Verdicts" },

J("The court will now rule on each individual covered by these proceedings."),

// Trygve
J("On the matter of... cardboard-Trygve."),
{ who: "trygve", name: "Trygve (cardboard)", pos: "witness", text: "..." },
D("Trygve was cardboard during the entire occurrence, from before the party approached the hags' dwelling to the end of the Thunderwave cast. As such he is not involved in or responsible for the actions taken during this time."),
{ verdict: { target: "Trygve", word: "NOT INVOLVED\n(WAS CARDBOARD)", type: "neutral" } },

// Morgantha
J("On the matter of the hag Morgantha."),
{ who: "morgantha", name: "Morgantha", pos: "witness", text: "Heh heh heh... come now, dearies. It was only a bit of fun..." },
D("Morgantha attacked Ibai, resulting in causing him physical injury in addition to yet-unknown chemical poisoning. Morgantha did not take these actions in justified defense, but instead did so unlawfully and in an act of assault."),
D("Whether her actions constitute simple or aggravated assault depends on the exact effect of the chemical weapon used and the level of spell slot used for Ray of Sickness."),
D("Morgantha additionally attempted to involve both Ibai and Ashborn, as well as the rest of the party by proxy, in her coven's criminal actions against the children Fyodor and Myrtle, through coercive threat of additional force. Morgantha also made clear her intention to commit murder against the children Fyodor and Myrtle, constituting a clear and imminent intent to harm them."),
{ verdict: { target: "Morgantha", word: "GUILTY", type: "guilty" } },

// Daughter A
J("On the matter of the hag known as 'Daughter A.'"),
D("Daughter A attacked Ashborn with a Hold Person spell and left him under reasonable apprehension of immediate injury. This spell was not cast in justified defense, but instead unlawfully and in an act of simple assault."),
D("She additionally assisted with the attempt to coerce the party into the coven's criminal actions, and may have intended to assist with the coven's possible attempted murder of Fyodor and Myrtle."),
{ verdict: { target: "Daughter A", word: "GUILTY", type: "guilty" } },

// Daughter B
J("On the matter of the hag known as 'Daughter B.'"),
D("Daughter B may have cast an additional Hold Person spell, but the witnesses are uncertain of this fact, and there is no documented evidence of such a cast. She is still reasonably likely to be a participant in the coven's other crimes."),
{ verdict: { target: "Daughter B", word: "UNDER SUSPICION", type: "neutral" } },

// Coven
J("On the matter of the coven as a whole."),
D("The coven, or members of the coven acting in its interests, committed aggravated assault through the Night Haunting of Franz. They also kidnapped the children Fyodor and Myrtle, in actions taken in criminal conspiracy to the malicious murder of the same children."),
{ verdict: { target: "The Coven", word: "GUILTY", type: "guilty" } },

// Ibai
J("On the matter of the bard Ibai."),
{ who: "ibai", name: "Ibai", pos: "witness", text: "Finally. Justice for the artists of Barovia. Someone write this down for the Brammy committee." },
D("Ibai entered the building lawfully, if dramatically, with no intention to commit crimes. He and Ashborn gave a mildly insulting but ultimately harmless and non-provocational rap performance."),
D("Ibai was assaulted by Morgantha after this performance ended, after which he still attempted to deescalate the situation, despite being under no legal obligation to do so."),
D("The hags demanded that he involve himself and the party in their murder of children in order to prevent further violence, and they made clear their intent to perform such violence imminently. As such, Ibai cast Thunderwave in justified defense of himself, the party, and the children Fyodor and Myrtle."),
{ verdict: { target: "Ibai", word: "NOT GUILTY", type: "notguilty" } },

// Ashborn
J("On the matter of Ashborn."),
D("Ashborn entered the building lawfully with no intentions towards commission of crimes after Morgantha backed away from the door to allow him entry. He took no actions that can be construed as a threat or use of force. He participated in the 'disstract,' but the performance does not reasonably represent a threat or provocation."),
{ verdict: { target: "Ashborn", word: "NOT GUILTY", type: "notguilty" } },

// Irina
J("On the matter of the cleric Irina."),
D("Irina entered the building lawfully after Ashborn with no intentions of committing crimes. She took no actions that can be construed as a threat or use of force."),
D("Irina did not commit theft by reading the hags' names, she did not commit theft by assisting in freeing the children Myrtle and Fyodor, and she left the building and the lawful property within in the exact condition it was in when she entered."),
{ verdict: { target: "Irina", word: "NOT GUILTY", type: "notguilty" } },

// Ireena
J("On the matter of Ireena."),
D("Ireena entered the building lawfully after Irina with no intentions of committing crimes. She took no actions that can be construed as a threat or use of force or damage to property. Ireena did not commit theft by assisting in freeing the children Myrtle and Fyodor."),
D("The only change she made to the property was the tying of an easily-untied rope to a secure position on the building's architecture."),
{ verdict: { target: "Ireena", word: "NOT GUILTY", type: "notguilty" } },

// Closing
J("So rules this court. The party stands justified; the coven stands accused of aggravated assault, kidnapping, and conspiracy to malicious murder."),
J("That is all. The court is adjourned!"),
{ banner: "THE HAG TRIALS\n— FIN —" }
];
