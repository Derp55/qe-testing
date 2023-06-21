const threads = [
    {
        id: 1,
        name: "Colorado Territory",
        desc: "Blood-sampling cause abn react/compl, w/o misadvnt",
        desc1: "Blood-sampling as the cause of abnormal reaction of the patient, or of later complication, without mention of misadventure at the time of the procedure",
        date: "8/3/2022",
    },
    {
        id: 2,
        name: "Cry Freedom",
        desc: "Burn of first degree of unspecified axilla, subs encntr",
        desc1: "Burn of first degree of unspecified axilla, subsequent encounter",
        date: "1/18/2023",
    },
    {
        id: 3,
        name: "Kiss of the Spider Woman",
        desc: "Prsn brd/alit mtrcy injured in collision w hv veh, sequela",
        desc1: "Person boarding or alighting a motorcycle injured in collision with heavy transport vehicle or bus, sequela",
        date: "2/22/2023",
    },
    {
        id: 4,
        name: "Hard Target",
        desc: "Corros unsp deg mult left fingers (nail), inc thumb, subs",
        desc1: "Corrosion of unspecified degree of multiple left fingers (nail), including thumb, subsequent encounter",
        date: "7/27/2022",
    },
    {
        id: 5,
        name: "Man Who Saw Tomorrow, The",
        desc: "Other osteomyelitis",
        desc1: "Other osteomyelitis",
        date: "9/15/2022",
    },
    {
        id: 6,
        name: "National Lampoon's Cattle Call (Cattle Call)",
        desc: "Loose body in unspecified ankle",
        desc1: "Loose body in unspecified ankle",
        date: "10/6/2022",
    },
    {
        id: 7,
        name: "A Via Láctea",
        desc: "Unsp fracture of right foot, init encntr for open fracture",
        desc1: "Unspecified fracture of right foot, initial encounter for open fracture",
        date: "3/12/2022",
    },
    {
        id: 8,
        name: "Pope's Toilet, The (El bano del Papa)",
        desc: "Unspecified injury of other specified intrathoracic organs",
        desc1: "Unspecified injury of other specified intrathoracic organs",
        date: "4/28/2023",
    },
    {
        id: 9,
        name: "Life Without Dick",
        desc: "Fracture of mandible, unsp, subs for fx w delay heal",
        desc1: "Fracture of mandible, unspecified, subsequent encounter for fracture with delayed healing",
        date: "12/10/2022",
    },
    {
        id: 10,
        name: "Bloody Murder",
        desc: "Poisoning by immunoglobulin, assault, subsequent encounter",
        desc1: "Poisoning by immunoglobulin, assault, subsequent encounter",
        date: "3/17/2022",
    },
    {
        id: 11,
        name: "Murder on the Orient Express",
        desc: "Foster father, perpetrator of maltreatment and neglect",
        desc1: "Foster father, perpetrator of maltreatment and neglect",
        date: "11/17/2022",
    },
    {
        id: 12,
        name: "Brick",
        desc: "Displaced transverse fx shaft of unsp femur, sequela",
        desc1: "Displaced transverse fracture of shaft of unspecified femur, sequela",
        date: "7/11/2022",
    },
    {
        id: 13,
        name: "Born to Fight",
        desc: "Unsp injury of musc/fasc/tend at thi lev, right thigh, init",
        desc1: "Unspecified injury of other specified muscles, fascia and tendons at thigh level, right thigh, initial encounter",
        date: "4/24/2023",
    },
    {
        id: 14,
        name: "W.E.",
        desc: "General hospital and personal-use devices assoc w incdt",
        desc1: "General hospital and personal-use devices associated with adverse incidents",
        date: "1/29/2023",
    },
    {
        id: 15,
        name: "Atlantis: The Lost Empire",
        desc: "Sltr-haris Type II physl fx lower end radius, left arm, init",
        desc1: "Salter-Harris Type II physeal fracture of lower end of radius, left arm, initial encounter for closed fracture",
        date: "9/10/2022",
    },
    {
        id: 16,
        name: "All Cheerleaders Die",
        desc: "Corrosion of first deg mult sites of right ank/ft, sequela",
        desc1: "Corrosion of first degree of multiple sites of right ankle and foot, sequela",
        date: "1/5/2023",
    },
    {
        id: 17,
        name: "Babysitter Wanted",
        desc: "Sltr-haris Type I physl fx upper end humer, unsp arm, sqla",
        desc1: "Salter-Harris Type I physeal fracture of upper end of humerus, unspecified arm, sequela",
        date: "4/19/2022",
    },
    {
        id: 18,
        name: "8 1/2 (8½)",
        desc: "Acute sinusitis, unspecified",
        desc1: "Acute sinusitis, unspecified",
        date: "3/23/2023",
    },
    {
        id: 19,
        name: "Metalstorm: The Destruction of Jared-Syn",
        desc: "Unsp abnormal cytological findings in specimens from vagina",
        desc1: "Unspecified abnormal cytological findings in specimens from vagina",
        date: "9/12/2022",
    },
    {
        id: 20,
        name: "Mighty Heart, A",
        desc: "Moderate laceration of right kidney",
        desc1: "Moderate laceration of right kidney",
        date: "1/14/2023",
    },
    {
        id: 21,
        name: "Texas",
        desc: "Nondisp spiral fx shaft of ulna, unsp arm, 7thR",
        desc1: "Nondisplaced spiral fracture of shaft of ulna, unspecified arm, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion",
        date: "2/16/2023",
    },
    {
        id: 22,
        name: "Saga of Gosta Berling, The (Gösta Berlings saga)",
        desc: "Exposure to infrared radiation, subsequent encounter",
        desc1: "Exposure to infrared radiation, subsequent encounter",
        date: "8/21/2022",
    },
    {
        id: 23,
        name: "Operation Daybreak",
        desc: "Medial subluxation of left ulnohumeral joint, sequela",
        desc1: "Medial subluxation of left ulnohumeral joint, sequela",
        date: "3/30/2022",
    },
    {
        id: 24,
        name: "Cars",
        desc: "Traum hemor right cerebrum w/o loss of consciousness, subs",
        desc1: "Traumatic hemorrhage of right cerebrum without loss of consciousness, subsequent encounter",
        date: "1/26/2023",
    },
    {
        id: 25,
        name: "Monsignor",
        desc: "Displacement of implnt elec nstim of brain electrode (lead)",
        desc1: "Displacement of implanted electronic neurostimulator of brain electrode (lead)",
        date: "12/26/2022",
    },
    {
        id: 26,
        name: "Bastards",
        desc: "Arthralgia of temporomandibular joint, unspecified side",
        desc1: "Arthralgia of temporomandibular joint, unspecified side",
        date: "3/28/2022",
    },
    {
        id: 27,
        name: "Official Story, The (La historia oficial)",
        desc: "Fracture of proximal third of navicular bone of wrist",
        desc1: "Fracture of proximal third of navicular [scaphoid] bone of wrist",
        date: "5/31/2023",
    },
    {
        id: 28,
        name: "Steamboy (Suchîmubôi)",
        desc: "Monocular esotropia with A pattern",
        desc1: "Monocular esotropia with A pattern",
        date: "1/5/2022",
    },
    {
        id: 29,
        name: "Urusei Yatsura Movie 2: Beautiful Dreamer (Urusei Yatsura 2: Byûtifuru dorîmâ)",
        desc: "Legal intervnt w unsp gas, law enforc offl injured, init",
        desc1: "Legal intervention involving unspecified gas, law enforcement official injured, initial encounter",
        date: "2/16/2022",
    },
    {
        id: 30,
        name: "Hop",
        desc: "Injury of digital nerve of other finger",
        desc1: "Injury of digital nerve of other finger",
        date: "4/17/2022",
    },
    {
        id: 31,
        name: "Staying Together",
        desc: "Lead-induced chronic gout, right shoulder, without tophus",
        desc1: "Lead-induced chronic gout, right shoulder, without tophus (tophi)",
        date: "12/23/2022",
    },
    {
        id: 32,
        name: "Hold That Ghost",
        desc: "Drug/chem diabetes w prolif diabetic rtnop w/o macular edema",
        desc1: "Drug or chemical induced diabetes mellitus with proliferative diabetic retinopathy without macular edema",
        date: "12/20/2022",
    },
    {
        id: 33,
        name: "Slaves of New York",
        desc: "Strain of msl/fasc/tnd post grp at thi lev, unsp thigh, subs",
        desc1: "Strain of muscle, fascia and tendon of the posterior muscle group at thigh level, unspecified thigh, subsequent encounter",
        date: "9/10/2022",
    },
    {
        id: 34,
        name: "More Than a Game",
        desc: "Nondisp fx of dist phalanx of l thm, subs for fx w malunion",
        desc1: "Nondisplaced fracture of distal phalanx of left thumb, subsequent encounter for fracture with malunion",
        date: "1/17/2023",
    },
    {
        id: 35,
        name: "Donnie Brasco",
        desc: "Pathological fracture, left fibula, subs for fx w delay heal",
        desc1: "Pathological fracture, left fibula, subsequent encounter for fracture with delayed healing",
        date: "3/4/2022",
    },
    {
        id: 36,
        name: "Smart People",
        desc: "Fracture of one rib, unsp side, subs for fx w delay heal",
        desc1: "Fracture of one rib, unspecified side, subsequent encounter for fracture with delayed healing",
        date: "4/1/2023",
    },
    {
        id: 37,
        name: "Star for Two, A",
        desc: "Subluxation of other parts of right shoulder girdle, sequela",
        desc1: "Subluxation of other parts of right shoulder girdle, sequela",
        date: "12/9/2022",
    },
    {
        id: 38,
        name: "Inside Job",
        desc: "Cutaneous abscess of umbilicus",
        desc1: "Cutaneous abscess of umbilicus",
        date: "2/19/2022",
    },
    {
        id: 39,
        name: "Bohème, La",
        desc: "Arthritis due to other bacteria, unspecified wrist",
        desc1: "Arthritis due to other bacteria, unspecified wrist",
        date: "1/13/2022",
    },
    {
        id: 40,
        name: "Dragon (Wu Xia)",
        desc: "Pnctr w fb of right thumb w damage to nail, sequela",
        desc1: "Puncture wound with foreign body of right thumb with damage to nail, sequela",
        date: "3/25/2023",
    },
    {
        id: 41,
        name: "Straw Dogs",
        desc: "Dislocation of distal radioulnar joint of unspecified wrist",
        desc1: "Dislocation of distal radioulnar joint of unspecified wrist",
        date: "10/15/2022",
    },
    {
        id: 42,
        name: "There's Always Tomorrow",
        desc: "Disp fx of med malleolus of unsp tibia, 7thJ",
        desc1: "Displaced fracture of medial malleolus of unspecified tibia, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with delayed healing",
        date: "6/9/2023",
    },
    {
        id: 43,
        name: "Witness to Murder",
        desc: "Ulnar collateral ligament sprain of unspecified elbow",
        desc1: "Ulnar collateral ligament sprain of unspecified elbow",
        date: "5/9/2022",
    },
    {
        id: 44,
        name: "Trouble the Water",
        desc: "Paralytic calcifcn and ossifictn of muscle, unsp upper arm",
        desc1: "Paralytic calcification and ossification of muscle, unspecified upper arm",
        date: "11/12/2022",
    },
    {
        id: 45,
        name: "Malone",
        desc: "Displaced fracture of base of neck of left femur",
        desc1: "Displaced fracture of base of neck of left femur",
        date: "3/7/2022",
    },
    {
        id: 46,
        name: "Operation Dumbo Drop",
        desc: "Pain in right ankle and joints of right foot",
        desc1: "Pain in right ankle and joints of right foot",
        date: "10/6/2022",
    },
    {
        id: 47,
        name: "We Are The Night (Wir sind die Nacht)",
        desc: "Round hole of retina without detachment",
        desc1: "Round hole of retina without detachment",
        date: "1/30/2022",
    },
    {
        id: 48,
        name: "Lust for Life",
        desc: "Frostbite with tissue necrosis of right toe(s), sequela",
        desc1: "Frostbite with tissue necrosis of right toe(s), sequela",
        date: "7/12/2022",
    },
    {
        id: 49,
        name: "Wives and Lovers",
        desc: "Laceration of adductor musc/fasc/tend left thigh, init",
        desc1: "Laceration of adductor muscle, fascia and tendon of left thigh, initial encounter",
        date: "6/10/2022",
    },
    {
        id: 50,
        name: "Salaam-E-Ishq",
        desc: "Laceration of unsp musc/fasc/tend at thigh level, left thigh",
        desc1: "Laceration of unspecified muscles, fascia and tendons at thigh level, left thigh",
        date: "2/6/2022",
    },
    {
        id: 51,
        name: "Sink the Bismark!",
        desc: "Type I occipital condyle fracture, right side, init",
        desc1: "Type I occipital condyle fracture, right side, initial encounter for closed fracture",
        date: "2/24/2022",
    },
]

export default threads