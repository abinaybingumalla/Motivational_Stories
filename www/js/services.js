'use strict';
angular.module('motivation.services', [])

.factory('storiesFactory', ['$http', function ($http) {

    var storiesFac = {};

    var stories = [


        {
            "id": 0,
            "title": "The important things in life ",
            "description": [
                {
                    "paragraph": "A philosophy professor stood before his class with some items on the table in front of him. When the class began, wordlessly he picked up a very large and empty mayonnaise jar and proceeded to fill it with rocks, about 2 inches in diameter."
            },
                {
                    "paragraph": "He then asked the students if the jar was full. They agreed that it was."
            },
                {
                    "paragraph": "So the professor then picked up a box of pebbles and poured them into the jar. He shook the jar lightly. The pebbles, of course, rolled into the open areas between the rocks."
            },
                {
                    "paragraph": "He then asked the students again if the jar was full. They agreed it was."
            },
                {
                    "paragraph": "The professor picked up a box of sand and poured it into the jar. Of course, the sand filled up the remaining open areas of the jar."
            },
                {
                    "paragraph": "He then asked once more if the jar was full. The students responded with a unanimous “Yes.”"
            },
                {
                    "paragraph": "“Now,” said the professor, “I want you to recognize that this jar represents your life. The rocks are the important things – your family, your partner, your health, your children – things that if everything else was lost and only they remained, your life would still be full. The pebbles are the other things that matter – like your job, your house, your car. The sand is everything else, the small stuff.”"
            },
                {
                    "paragraph": "“If you put the sand into the jar first,” he continued, “there is no room for the pebbles or the rocks. The same goes for your life. If you spend all your time and energy on the small stuff, you will never have room for the things that are important to you. Pay attention to the things that are critical to your happiness. Play with your children. Take your partner out dancing. There will always be time to go to work, clean the house, give a dinner party, or fix the disposal.”"
            },
                {
                    "paragraph": "“Take care of the rocks first – the things that really matter. Set your priorities. The rest is just sand.”"
            }
        ]
    },

        {
            "id": 1,
            "title": "Give time to our family",
            "description": [
                {
                    "paragraph": "After 21 years of marriage, my wife wanted me to take another woman out to dinner and a movie. She said, “I love you, but I know this other woman loves you and would love to spend some time with you.”"
            },
                {
                    "paragraph": "The other woman that my wife wanted me to visit was my MOTHER, who has been a widow for 19 years, but the demands of my work and my three children had made it possible to visit her only occasionally. That night I called to invite her to go out for dinner and a movie. “What’s wrong, are you well?” she asked."
            },
                {
                    "paragraph": "My mother is the type of woman who suspects that a late night call or a surprise invitation is a sign of bad news. “I thought that it would be pleasant to spend some time with you,” I responded. “Just the two of us.” She thought about it for a moment, and then said, “I would like that very much.”"
            },
                {
                    "paragraph": "That Friday after work, as I drove over to pick her up I was a bit nervous. When I arrived at her house, I noticed that she, too, seemed to be nervous about our date. She waited in the door with her coat on. She had curled her hair and was wearing the dress that she had worn to celebrate her last wedding anniversary. She smiled from a face that was as radiant as an angel’s. “I told my friends that I was going to go out with my son, and they were impressed, “she said, as she got into the car. “They can’t wait to hear about our meeting.”"
            },
                {
                    "paragraph": "We went to a restaurant that, although not elegant, was very nice and cozy. My mother took my arm as if she were the First Lady. After we sat down, I had to read the menu. Her eyes could only read large print. Half way through the entries, I lifted my eyes and saw Mom sitting there staring at me. A nostalgic smile was on her lips. “It was I who used to have to read the menu when you were small,” she said. “Then it’s time that you relax and let me return the favor,” I responded. During the dinner, we had an agreeable conversation – nothing extraordinary but catching up on recent events of each other’s life. We talked so much that we missed the movie. As we arrived at her house later, she said, “I’ll go out with you again, but only if you let me invite you.” I agreed."
            },
                {
                    "paragraph": "“How was your dinner date?” asked my wife when I got home. “Very nice. Much more so than I could have imagined,” I answered."
            },
                {
                    "paragraph": "A few days later, my mother died of a massive heart attack. It happened so suddenly that I didn’t have a chance to do anything for her. Some time later, I received an envelope with a copy of a restaurant receipt from the same place mother and I had dined. An attached note said: “I paid this bill in advance. I wasn’t sure that I could be there; but nevertheless, I paid for two plates – one for you and the other for your wife. You will never know what that night meant for me. I love you, son.”"
            },
                {
                    "paragraph": "At that moment, I understood the importance of saying in time: “I LOVE YOU” and to give our loved ones the time that they deserve. Nothing in life is more important than your family. Give them the time they deserve, because these things cannot be put off till “some other time.”"
            }
        ]

    },

        {
            "id": 2,
            "title": "Live and Work ",
            "description": [
                {
                    "paragraph": "Father was a hardworking man who delivered bread as a living to support his wife and three children. He spent all his evenings after work attending classes, hoping to improve himself so that he could one day find a better paying job. Except for Sundays, Father hardly ate a meal together with his family. He worked and studied very hard because he wanted to provide his family with the best money could buy."
            },
                {
                    "paragraph": "Whenever the family complained that he was not spending enough time with them, he reasoned that he was doing all this for them. But he often yearned to spend more time with his family."
            },
                {
                    "paragraph": "The day came when the examination results were announced. To his joy, Father passed, and with distinctions too! Soon after, he was offered a good job as a senior supervisor which paid handsomely."
            },
                {
                    "paragraph": "Like a dream come true, Father could now afford to provide his family with life’s little luxuries like nice clothing, fine food and vacation abroad."
            },
                {
                    "paragraph": "However, the family still did not get to see father for most of the week. He continued to work very hard, hoping to be promoted to the position of manager. In fact, to make himself a worthily candidate for the promotion, he enrolled for another course in the open university."
            },
                {
                    "paragraph": "Again, whenever the family complained that he was not spending enough time with them, he reasoned that he was doing all this for them. But he often yearned to spend more time with his family."
            },
                {
                    "paragraph": "Father’s hard work paid off and he was promoted. Jubilantly, he decided to hire a maid to relieve his wife from her domestic tasks. He also felt that their three-room flat was no longer big enough, it would be nice for his family to be able to enjoy the facilities and comfort of a condominium. Having experienced the rewards of his hard work many times before, Father resolved to further his studies and work at being promoted again. The family still did not get to see much of him. In fact, sometimes Father had to work on Sundays entertaining clients. Again, whenever the family complained that he was not spending enough time with them, he reasoned that he was doing all this for them. But he often yearned to spend more time with his family."
            },
                {
                    "paragraph": "As expected, Father’s hard work paid off again and he bought a beautiful condominium overlooking the coast of Singapore. On the first Sunday evening at their new home, Father declared to his family that he decided not to take anymore courses or pursue any more promotions. From then on he was going to devote more time to his family."
            },
                {
                    "paragraph": "Father did not wake up the next day."
            }
        ]

    },

        {
            "id": 3,
            "title": "The Fat Lady",
            "description": [{
                "paragraph": "Hi! How are you?” The woman smiled as she took the seat beside me. She had to lower herself slowly, squeezing her ample bottom into the seat, filling all available space."
            }, {
                "paragraph": "Positioning herself comfortably, she plopped her enormous arm on our common armrest. Her immensity saturated the space around us, shrinking me and my seat into insignificance."
            }, {
                "paragraph": "I cringed and reclined towards the window."
            }, {
                "paragraph": "She leaned towards me and repeated her greeting in an upbeat, friendly voice. Her face towered above my head, forcing me to turn to look at her. “Hi,” I replied with obvious loathing."
            }, {
                "paragraph": "I turned away to stare out the cabin window, sulking silently about the long hours of discomfort I was going to experience with this monster beside me."
            }, {
                "paragraph": "She nudged me with her meaty arm. “My name is Laura. I’m from Britain. How about you? Japan?”"
            }, {
                "paragraph": "“Malaysia,” I barked."
            }, {
                "paragraph": "“I’m so sorry! Will you accept my heartfelt apology? Come, shake my hand. If we’re going to spend six hours side-by-side on this flight, we’d better be friends, don’t you think?” A palm waved in front of my face. I shook the hand reluctantly, still silent."
            }, {
                "paragraph": "Laura started a conversation with me, taking no notice of my unfriendly reactions. She talked excitedly about herself and her trip to Hong Kong to see her frinds. She rattled off a list of things she was going to buy for her students in the boarding school where she was teaching."
            }, {
                "paragraph": "I gave her one-word answers to her questions about me. Unperturbed by my coldness, she nodded as she made appreciative comments to my answers. Her voice was warm and caring. She was considerate and obliging when we were served drinks and meals, making sure that I had room to manoeuvre in my seat. “I don’t want to clobber you with my elephant size!” she said with utmost sincerity."
            }, {
                "paragraph": "To my surprise, her face which repulsed me hours before, now opened into extraordinary smiles, lively and calm at the same time. I couldn’t help but let down my guard slowly."
            }, {
                "paragraph": "Laura was an interesting conversationalist. She was well read in many subjects from philosophy to science. She turned a seemingly unimportant subject into something to explore and understand. Her comments were humorous and inspirational. When our topic turned to cultures, I was pleasantly surprised by her intelligent comments and well-thought-out analysis."
            }, {
                "paragraph": "During our conversation, Laura managed to make every cabin crew who served us walk away laughing at her jokes."
            }, {
                "paragraph": "When a flight attendant was clearing our plates, Laura cracked several jokes about her size. The flight attendant roared with laughter as she grabbed Laura’s hand, “You really make my day!”"
            }, {
                "paragraph": "For the next few minutes, Laura listened attentively and gave pointers to the flight attendant’s weight problem. The grateful attendant said before she rushed off, “I’ve got to work. I’ll come back later and talk to you about it.”"
            }, {
                "paragraph": "I asked Laura, “‘Have you ever thought about losing some weight?”"
            }, {
                "paragraph": "“No. I’ve worked hard to get this way. Why would I want to give it up?”"
            }, {
                "paragraph": "“You aren’t worried about cardiovascular diseases that come with being overweight?”"
            }, {
                "paragraph": "“Not at all. You only get the diseases if you’re worried about your weight all the time. You see advertisements from slimming centres that say, ‘Liberate yourself from your extra baggage so that you are free to be yourself.’ It’s rubbish! You’re liberated only if you’re comfortable about who you are, and what you look like any time of the day and anytime of the year! Why would I want to waste my time on slimming regimes when I have so many other important things to do and so many people to be friends with? I eat healthily and walk regularly; I’m this size because I am born to be big! There is more to life than worrying about weight all day long.”"
            }, {
                "paragraph": "She sipped at her wine. “Besides, God gives me so much happiness that I need a bigger body to hold all of it! Why would I lose weight to lose my happiness?” Taken aback by her reasoning, I chuckled."
            }, {
                "paragraph": "Laura continued. “Folks often see me as a fat lady with big bosoms, big thighs and a big bottom that no man would even bother to cast a glance at. They see me as a slob. They think I’m lazy and have no willpower. They’re wrong.” She held up her glass to a passing flight attendant. “More of this magnificent wine, please.” She smiled sweetly at the attendant. “Great service from your crew. May God bless all of you.”"
            }, {
                "paragraph": "She turned to me, “I’m actually a slim person inside. I’m so full of energy that people won’t be able to keep up with me. This extra flesh is here to slow me down, otherwise I’ll be running everywhere chasing after men!”"
            }, {
                "paragraph": "“Do men chase after you?” I asked jokingly."
            }, {
                "paragraph": "“Of course they do. I’m happily married but men still keep proposing to me."
            }, {
                "paragraph": "“Most of them have relationship problems and they need someone to confide in. For some reason, they like to talk to me. I think I should have been a counsellor instead of a school teacher!”"
            }, {
                "paragraph": "Laura paused before she said thoughtfully, “You know, the relationship between men and women is so complicated. Women worship men and call them, ‘Honey’ until they find out they have been lied to, and then they turn into bitter gourds! Men love women so much that they see them as their soul mates until they look at their credit card bills, and then women become devils with tridents!”"
            }, {
                "paragraph": "Laura’s enthralling conversation had turned the flight into something thoroughly enjoyable. I was also fascinated by the way people were drawn to her. By the end of the flight, almost half the cabin crew was standing near the aisle by us, laughing and joking with Laura. The passengers around us joined in the merry-making too. Laura was the centre of attention, filling the cabin with delightful warmth."
            }, {
                "paragraph": "When we waved goodbye to each other at the arrival lounge at Hong Kong’s Kai Tak Airport, I watched her walking towards a big group of adoring adults and kids. Cheers sounded as the group hugged and kissed Laura. She turned around and winked at me."
            }, {
                "paragraph": "I was stunned, as the realisation set in: Laura was the most beautiful woman I had ever met in my life."
            }, {
                "paragraph": "By Chong Sheau Ching"
            }]
        },

        {
            "id": 4,
            "title": "The last cab ride ",
            "description": [
                {
                    "paragraph": "Twenty years ago, I drove a cab for a living. One time I arrived in the middle of the night for a pick up at a building that was dark except for a single light in a ground floor window."
            },
                {
                    "paragraph": "Under these circumstances, many drivers would just honk once or twice, wait a minute, then drive away. But I had seen too many impoverished people who depended on taxis as their only means of transportation. Unless a situation smelled of danger, I always went to the door. This passenger might be someone who needs my assistance, I reasoned to myself. So I walked to the door and knocked."
            },
                {
                    "paragraph": "“Just a minute,” answered a frail, elderly voice."
            },
                {
                    "paragraph": "I could hear something being dragged across the floor. After a long pause, the door opened. A small woman in her 80′s stood before me. She was wearing a print dress and a pillbox hat with a veil pinned on it, like somebody out of a 1940s movie. By her side was a small nylon suitcase."
            },
                {
                    "paragraph": "The apartment looked as if no one had lived in it for years. All the furniture was covered with sheets. There were no clocks on the walls, no knickknacks or utensils on the counters. In the corner was a cardboard box filled with photos and glassware."
            },
                {
                    "paragraph": "“Would you carry my bag out to the car?” she said. I took the suitcase to the cab, then returned to assist the woman. She took my arm and we walked slowly toward the curb. She kept thanking me for my kindness."
            },
                {
                    "paragraph": "“It’s nothing,” I told her. “I just try to treat my passengers the way I would want my mother treated.”"
            },
                {
                    "paragraph": "“Oh, you’re such a good boy,” she said. When we got in the cab, she gave me an address, then asked, “Could you drive through downtown?”"
            },
                {
                    "paragraph": "“It’s not the shortest way,” I answered quickly."
            },
                {
                    "paragraph": "“Oh, I don’t mind,” she said. “I’m in no hurry. I’m on my way to a hospice.”"
            },
                {
                    "paragraph": "I looked in the rear view mirror. Her eyes were glistening."
            },
                {
                    "paragraph": "“I don’t have any family left,” she continued. “The doctor says I don’t have very long.”"
            },
                {
                    "paragraph": "I quietly reached over and shut off the meter. “What route would you like me to take?” I asked."
            },
                {
                    "paragraph": "For the next two hours, we drove through the city. She showed me the building where she had once worked as an elevator operator. We drove through the neighborhood where she and her husband had lived when they were newlyweds. She had me pull up in front of a furniture warehouse that had once been a ballroom where she had gone dancing as a girl."
            },
                {
                    "paragraph": "Sometimes she’d ask me to slow in front of a particular building or corner and would sit staring into the darkness, saying nothing."
            },
                {
                    "paragraph": "As the first hint of sun was creasing the horizon, she suddenly said, “I’m tired. Let’s go now.”"
            },
                {
                    "paragraph": "We drove in silence to the address she had given me."
            },
                {
                    "paragraph": "It was a low building, like a small convalescent home, with a driveway that passed under a portico. Two orderlies came out to the cab as soon as we pulled up. They were solicitous and intent, watching her every move. They must have been expecting her. I opened the trunk and took the small suitcase to the door. The woman was already seated in a wheelchair."
            },
                {
                    "paragraph": "“How much do I owe you?” she asked, reaching into her purse."
            },
                {
                    "paragraph": "“Nothing,” I said."
            },
                {
                    "paragraph": "“You have to make a living,” she answered."
            },
                {
                    "paragraph": "“There are other passengers.”"
            },
                {
                    "paragraph": "Almost without thinking, I bent and gave her a hug. She held onto me tightly."
            },
                {
                    "paragraph": "“You gave an old woman a little moment of joy,” she said. “Thank you.”"
            },
                {
                    "paragraph": "I squeezed her hand, then walked into the dim morning light. Behind me, a door shut. It was the sound of the closing of a life."
            },
                {
                    "paragraph": "I didn’t pick up any more passengers that shift. I drove aimlessly, lost in thought. For the rest of that day, I could hardly talk. What if that woman had gotten an angry driver, or one who was impatient to end his shift? What if I had refused to take the run, or had honked once, then driven away? On a quick review, I don’t think that I have done anything more important in my life. We’re conditioned to think that our lives revolve around great moments. But great moments often catch us unaware—beautifully wrapped in what others may consider a small one."
            },
                {
                    "paragraph": "A true story by Kent Nerburn"
            }
        ]

    },

        {
            "id": 5,
            "title": "The little boy",
            "description": [
                {
                    "paragraph": "Sally jumped up as soon as she saw the surgeon come out of the operating room. She said: “How is my little boy? Is he going to be all right? When can I see him?”"
        },
                {
                    "paragraph": "The surgeon said, “I’m sorry. We did all we could, but your boy didn’t make it.”"
        },
                {
                    "paragraph": "Sally said, “Why do little children get cancer? Doesn’t God care any more? Where were you, God, when my son needed you?”"
        },
                {
                    "paragraph": "The surgeon asked, “Would you like some time alone with your son? One of the nurses will be out in a few minutes, before he’s transported to the university.”"
        },
                {
                    "paragraph": "Sally asked the nurse to stay with her while she said good-bye to son. She ran her fingers lovingly through his thick red curly hair."
        },
                {
                    "paragraph": "“Would you like a lock of his hair?” the nurse asked."
        },
                {
                    "paragraph": "Sally nodded yes. The nurse cut a lock of the boy’s hair, put it in a plastic bag and handed it to Sally. The mother said, “It was Jimmy’s idea to donate his body to the university for study. He said it might help somebody else. “I said no at first, but Jimmy said, ‘Mom, I won’t be using it after I die. Maybe it will help some other little boy spend one more day with his Mom.” She went on, “My Jimmy had a heart of gold. Always thinking of someone else. Always wanting to help others if he could.”"
        },
                {
                    "paragraph": "Sally walked out of Children’s mercy Hospital for the last time, after spending most of the last six months there. She put the bag with Jimmy’s belongings on the seat beside her in the car. The drive home was difficult. It was even harder to enter the empty house. She carried Jimmy’s belongings, and the plastic bag with the lock of his hair to her son’s room. She started placing the model cars and other personal things back in his room exactly where he had always kept them. She laid down across his bed and, hugging his pillow, cried herself to sleep."
        },
                {
                    "paragraph": "It was around midnight when Sally awoke. Laying beside her on the bed was a folded letter. The letter said:"
        },
                {
                    "paragraph": "“Dear Mom,"
        },
                {
                    "paragraph": "I know you’re going to miss me; but don’t think that I will ever forget you, or stop loving you, just ’cause I’m not around to say I LOVE YOU. I will always love you, Mom, even more with each day. Someday we will see each other again. Until then, if you want to adopt a little boy so you won’t be so lonely, that’s okay with me. He can have my room and old stuff to play with. But, if you decide to get a girl instead, she probably wouldn’t like the same things us boys do. You’ll have to buy her dolls and stuff girls like, you know. Don’t be sad thinking about me. This really is a neat place. Grandma and Grandpa met me as soon as I got here and showed me around some, but it will take a long time to see everything. The angels are so cool. I love to watch them fly. And, you know what? Jesus doesn’t look like any of his pictures. Yet, when I saw Him, I knew it was Him. Jesus himself took me to see GOD! And guess what, Mom? I got to sit on God’s knee and talk to Him, like I was somebody important. That’s when I told Him that I wanted to write you a letter, to tell you good-bye and everything. But I already knew that wasn’t allowed. Well, you know what Mom? God handed me some paper and His own personal pen to write you this letter. I think Gabriel is the name of the angel who is going to drop this letter off to you. God said for me to give you the answer to one of the questions you asked Him ‘Where was He when I needed him?’ “God said He was in the same place with me, as when His son Jesus was on the cross. He was right there, as He always is with all His children."
        },
                {
                    "paragraph": "Oh, by the way, Mom, no one else can see what I’ve written except you. To everyone else this is just a blank piece of paper. Isn’t that cool? I have to give God His pen back now. He needs it to write some more names in the Book of Life. Tonight I get to sit at the table with Jesus for supper. I’m, sure the food will be great."
        },
                {
                    "paragraph": "Oh, I almost forgot to tell you. I don’t hurt anymore. The cancer is all gone. I’m glad because I couldn’t stand that pain anymore and God couldn’t stand to see me hurt so much, either. That’s when He sent The Angel of Mercy to come get me. The Angel said I was a Special Delivery! How about that?"
        },
                {
                    "paragraph": "Signed with Love from: God, Jesus & Me.”"
        }

      ]
    },

        {
            "id": 6,
            "title": "Hospital window",
            "description": [{
                "paragraph": "Two men, both seriously ill, occupied the same hospital room. One man was allowed to sit up in his bed for an hour each afternoon to help drain the fluid from his lungs. His bed was next to the room’s only window. The other man had to spend all his time flat on his back. The men talked for hours on end. They spoke of their wives and families, their homes, their jobs, their involvement in the military service, where they had been on vacation."
            }, {
                "paragraph": "Every afternoon when the man in the bed by the window could sit up, he would pass the time by describing to his roommate all the things he could see outside the window."
            }, {
                "paragraph": "The man in the other bed began to live for those one hour periods where his world would be broadened and enlivened by all the activity and color of the world outside."
            }, {
                "paragraph": "The window overlooked a park with a lovely lake. Ducks and swans played on the water while children sailed their model boats. Young lovers walked arm in arm amidst flowers of every color and a fine view of the city skyline could be seen in the distance."
            }, {
                "paragraph": "As the man by the window described all this in exquisite detail, the man on the other side of the room would close his eyes and imagine the picturesque scene."
            }, {
                "paragraph": "One warm afternoon the man by the window described a parade passing by."
            }, {
                "paragraph": "Although the other man couldn’t hear the band – he could see it. In his mind’s eye as the gentleman by th! e window portrayed it with descriptive words."
            }, {
                "paragraph": "Days and weeks passed."
            }, {
                "paragraph": "One morning, the day nurse arrived to bring water for their baths only to find the lifeless body of the man by the window, who had died peacefully in his sleep. She was saddened and called the hospital attendants to take the body away."
            }, {
                "paragraph": "As soon as it seemed appropriate, the other man asked if he could be moved next to the window. The nurse was happy to make the switch, and after making sure he was comfortable, she left him alone."
            }, {
                "paragraph": "Slowly, painfully, he propped himself up on one elbow to take his first look at the real world outside."
            }, {
                "paragraph": "He strained to slowly turn to look out the window beside the bed."
            }, {
                "paragraph": "It faced a blank wall. The man asked the nurse what could have compelled his deceased roommate who had described such wonderful things outside this window"
            }, {
                "paragraph": "The nurse responded that the man was blind and could not even see the wall."
            }, {
                "paragraph": "She said, “Perhaps he just wanted to encourage you.”"
            }]
        },

        {
            "id": 7,
            "title": "The story of a blind girl",
            "description": [{
                "paragraph": "There was a blind girl who hated herself just because she was blind. She hated everyone, except her loving boyfriend. He was always there for her. She said that if she could only see the world, she would marry her boyfriend."
            }, {
                "paragraph": "One day, someone donated a pair of eyes to her and then she could see everything, including her boyfriend. Her boyfriend asked her, “Now that you can see the world, will you marry me?”"
            }, {
                "paragraph": "The girl was shocked when she saw that her boyfriend was blind too, and refused to marry him. Her boyfriend walked away in tears, and later wrote a letter to her saying:"
            }, {
                "paragraph": "“Just take care of my eyes dear.”"
            }, {
                "paragraph": "This is how human brain changes when the status changed. Only few remember what life was before, and who’s always been there even in the most painful situations."
            }, {
                "paragraph": "Life Is A Gift"
            }, {
                "paragraph": "Today before you think of saying an unkind word– think of someone who can’t speak."
            }, {
                "paragraph": "Before you complain about the taste of your food– think of someone who has nothing to eat."
            }, {
                "paragraph": "Before you complain about your husband or wife– think of someone who is crying out to God for a companion."
            }, {
                "paragraph": "Today before you complain about life– think of someone who went too early to heaven."
            }, {
                "paragraph": "Before you complain about your children– think of someone who desires children but they’re barren."
            }, {
                "paragraph": "Before you argue about your dirty house, someone didn’t clean or sweep– think of the people who are living in the streets."
            }, {
                "paragraph": "Before whining about the distance you drive– think of someone who walks the same distance with their feet."
            }, {
                "paragraph": "And when you are tired and complain about your job– think of the unemployed, the disabled and those who wished they had your job."
            }, {
                "paragraph": "But before you think of pointing the finger or condemning another– remember that not one of us are without sin and we all answer to one maker."
            }, {
                "paragraph": "And when depressing thoughts seem to get you down– put a smile on your face and thank God you’re alive and still around."
            }, {
                "paragraph": "Life is a gift – Live it, Enjoy it, Celebrate it, and Fulfill it."
            }]
        },

        {
            "id": 8,
            "title": "A glass of Milk, paid in Full",
            "description": [{
                "paragraph": "One day, a poor boy who was selling goods from door to door to pay his way through school, found he had only one thin dime left, and he was hungry. He decided he would ask for a meal at the next house. However, he lost his nerve when a lovely young woman opened the door."
            }, {
                "paragraph": "Instead of a meal he asked for a drink of water. She thought he looked hungry so brought him a large glass of milk."
            }, {
                "paragraph": "He drank it slowly, and then asked, “How much do I owe you?”"
            }, {
                "paragraph": "“You don’t owe me anything,” she replied. “Mother has taught us never to accept pay for a kindness.”"
            }, {
                "paragraph": "He said, “Then I thank you from my heart.”"
            }, {
                "paragraph": "As Howard Kelly left that house, he not only felt stronger physically, but his faith in God and man was strong also. He had been ready to give up and quit."
            }, {
                "paragraph": "Year’s later that young woman became critically ill. The local doctors were baffled. They finally sent her to the big city, where they called in specialists to study her rare disease."
            }, {
                "paragraph": "Dr. Howard Kelly was called in for the consultation. When he heard the name of the town she came from, a strange light filled his eyes. Immediately he rose and went down the hall of the hospital to her room."
            }, {
                "paragraph": "Dressed in his doctor’s gown he went in to see her. He recognized her at once. He went back to the consultation room determined to do his best to save her life. From that day he gave special attention to the case."
            }, {
                "paragraph": "After a long struggle, the battle was won. Dr. Kelly requested the business office to pass the final bill to him for approval. He looked at it, then wrote something on the edge and the bill was sent to her room."
            }, {
                "paragraph": "She feared to open it, for she was sure it would take the rest of her life to pay for it all. Finally she looked, and something caught her attention on the side of the bill. She began to read the following words:"
            }, {
                "paragraph": "“Paid in full with one glass of milk."
            }, {
                "paragraph": "Signed, Dr. Howard Kelly.”"
            }]
        },

        {
            "id": 9,
            "title": "Don’t Hope,… Decide!",
            "description": [{
                "paragraph": "While waiting to pick up a friend at the airport in Portland, Oregon, I had one of those life-changing experiences that you hear other people talk about — the kind that sneaks up on you unexpectedly. This one occurred a mere two feet away from me."
            }, {
                "paragraph": "Straining to locate my friend among the passengers deplaning through the jet way, I noticed a man coming toward me carrying two light bags. He stopped right next to me to greet his family."
            }, {
                "paragraph": "First he motioned to his youngest son (maybe six years old) as he laid down his bags. They gave each other a long, loving hug. As they separated enough to look in each other’s face, I heard the father say, “It’s so good to see you, son. I missed you so much!” His son smiled somewhat shyly, averted his eyes and replied softly, “Me, too, Dad!”"
            }, {
                "paragraph": "Then the man stood up, gazed in the eyes of his oldest son (maybe nine or ten) and while cupping his son’s face in his hands said, “You’re already quite the young man. I love you very much, Zach!” They too hugged a most loving, tender hug."
            }, {
                "paragraph": "While this was happening, a baby girl (perhaps one or one-and-a-half) was squirming excitedly in her mother’s arms, never once taking her little eyes off the wonderful sight of her returning father. The man said, “Hi, baby girl!” as he gently took the child from her mother. He quickly kissed her face all over and then held her close to his chest while rocking her from side to side. The little girl instantly relaxed and simply laid her head on his shoulder, motionless in pure contentment."
            }, {
                "paragraph": "After several moments, he handed his daughter to his oldest son and declared, “I’ve saved the best for last!” and proceeded to give his wife the longest, most passionate kiss I ever remember seeing. He gazed into her eyes for several seconds and then silently mouthed. “I love you so much!” They stared at each other’s eyes, beaming big smiles at one another, while holding both hands."
            }, {
                "paragraph": "For an instant they reminded me of newlyweds, but I knew by the age of their kids that they couldn’t possibly be. I puzzled about it for a moment then realized how totally engrossed I was in the wonderful display of unconditional love not more than an arm’s length away from me. I suddenly felt uncomfortable, as if I was invading something sacred, but was amazed to hear my own voice nervously ask, “Wow! How long have you two been married?"
            }, {
                "paragraph": "“Been together fourteen years total, married twelve of those.” he replied, without breaking his gaze from his lovely wife’s face. “Well then, how long have you been away?” I asked. The man finally turned and looked at me, still beaming his joyous smile. “Two whole days!”"
            }, {
                "paragraph": "Two days? I was stunned. By the intensity of the greeting, I had assumed he’d been gone for at least several weeks – if not months. I know my expression betrayed me."
            }, {
                "paragraph": "I said almost offhandedly, hoping to end my intrusion with some semblance of grace (and to get back to searching for my friend), “I hope my marriage is still that passionate after twelve years!”"
            }, {
                "paragraph": "The man suddenly stopped smiling."
            }, {
                "paragraph": "He looked me straight in the eye, and with forcefulness that burned right into my soul, he told me something that left me a different person. He told me, “Don’t hope, friend… decide!” Then he flashed me his wonderful smile again, shook my hand and said, “God bless!”"
            }, {
                "paragraph": "– By Michael D. Hargrove and Bottom Line Underwriters, Inc. Copyright 1997"
            }]
        },

        {
            "id": 10,
            "title": "Keep Your Dream",
            "description": [{
                "paragraph": "I have a friend named Monty Roberts who owns a horse ranch in San Ysidro. He has let me use his house to put on fund-raising events to raise money for youth at risk programs."
            }, {
                "paragraph": "The last time I was there he introduced me by saying:"
            }, {
                "paragraph": "“I want to tell you why I let Jack use my horse. It all goes back to a story about a young man who was the son of an itinerant horse trainer who would go from stable to stable, race track to race track, farm to farm and ranch to ranch, training horses. As a result, the boy’s high school career was continually interrupted. When he was a senior, he was asked to write a paper about what he wanted to be and do when he grew up.”"
            }, {
                "paragraph": "“That night he wrote a seven-page paper describing his goal of someday owning a horse ranch. He wrote about his dream in great detail and he even drew a diagram of a 200-acre ranch, showing the location of all the buildings, the stables and the track. Then he drew a detailed floor plan for a 4,000-square-foot house that would sit on a 200-acre dream ranch.”"
            }, {
                "paragraph": "“He put a great deal of his heart into the project and the next day he handed it in to his teacher. Two days later he received his paper back. On the front page was a large red F with a note that read, `See me after class.'”"
            }, {
                "paragraph": "“The boy with the dream went to see the teacher after class and asked, `Why did I receive an F?'”"
            }, {
                "paragraph": "“The teacher said, `This is an unrealistic dream for a young boy like you. You have no money. You come from an itinerant family. You have no resources. Owning a horse ranch requires a lot of money. You have to buy the land. You have to pay for the original breeding stock and later you’ll have to pay large stud fees. There’s no way you could ever do it.’ Then the teacher added, `If you will rewrite this paper with a more realistic goal, I will reconsider your grade.'”"
            }, {
                "paragraph": "“The boy went home and thought about it long and hard. He asked his father what he should do. His father said, `Look, son, you have to make up your own mind on this. However, I think it is a very important decision for you.’ Finally, after sitting with it for a week, the boy turned in the same paper, making no changes at all."
            }, {
                "paragraph": "He stated, ‘You can keep the F and I’ll keep my dream.'”"
            }, {
                "paragraph": "Monty then turned to the assembled group and said, “I tell you this story because you are sitting in my 4,000-square-foot house in the middle of my 200-acre horse ranch. I still have that school paper framed over the fireplace.”"
            }, {
                "paragraph": "He added, “The best part of the story is that two summers ago that same schoolteacher brought 30 kids to camp out on my ranch for a week. When the teacher was leaving, the teacher said, ‘Look, Monty, I can tell you this now. When I was your teacher, I was something of a dream stealer. During those years I stole a lot of kids’ dreams. Fortunately you had enough gumption not to give up on yours.'”"
            }, {
                "paragraph": "“Don’t let anyone steal your dreams. Follow your heart, no matter what.”"
            }]
        },

        {
            "id": 11,
            "title": "My mom only had one eye",
            "description": [{
                "paragraph": "My mom only had one eye. I hated her… She was such an embarrassment. She cooked for students and teachers to support the family."
            }, {
                "paragraph": "There was this one day during elementary school where my mom came to say hello to me. I was so embarrassed."
            }, {
                "paragraph": "How could she do this to me? I ignored her, threw her a hateful look and ran out. The next day at school one of my classmates said, “EEEE, your mom only has one eye!”"
            }, {
                "paragraph": "I wanted to bury myself. I also wanted my mom to just disappear. I confronted her that day and said, “If you’re only gonna make me a laughing stock, why don’t you just die?”"
            }, {
                "paragraph": "My mom did not respond… I didn’t even stop to think for a second about what I had said, because I was full of anger. I was oblivious to her feelings."
            }, {
                "paragraph": "I wanted out of that house, and have nothing to do with her. So I studied real hard, got a chance to go abroad to study."
            }, {
                "paragraph": "Then, I got married. I bought a house of my own. I had kids of my own. I was happy with my life, my kids and the comforts. Then one day, my Mother came to visit me. She hadn’t seen me in years and she didn’t even meet her grandchildren."
            }, {
                "paragraph": "When she stood by the door, my children laughed at her, and I yelled at her for coming over uninvited. I screamed at her, “How dare you come to my house and scare my children! GET OUT OF HERE! NOW!!!”"
            }, {
                "paragraph": "And to this, my mother quietly answered, “Oh, I’m so sorry. I may have gotten the wrong address.” – and she disappeared out of sight."
            }, {
                "paragraph": "One day, a letter regarding a school reunion came to my house. So I lied to my wife that I was going on a business trip. After the reunion, I went to the old shack just out of curiosity."
            }, {
                "paragraph": "My neighbors said that she died. I did not shed a single tear. They handed me a letter that she had wanted me to have."
            }, {
                "paragraph": "“My dearest son,"
            }, {
                "paragraph": "I think of you all the time. I’m sorry that I came to your house and scared your children."
            }, {
                "paragraph": "I was so glad when I heard you were coming for the reunion. But I may not be able to even get out of bed to see you. I’m sorry that I was a constant embarrassment to you when you were growing up."
            }, {
                "paragraph": "You see……..when you were very little, you got into an accident, and lost your eye. As a mother, I couldn’t stand watching you having to grow up with one eye. So I gave you mine."
            }, {
                "paragraph": "I was so proud of my son who was seeing a whole new world for me, in my place, with that eye."
            }, {
                "paragraph": "With all my love to you,"
            }, {
                "paragraph": "Your mother.”"
            }]
        },

        {
            "id": 12,
            "title": "Face Difficulties Positively",
            "description": [{
                "paragraph": "This parable is told of a farmer who owned an old mule. The mule fell into the farmer’s well. The farmer heard the mule praying or whatever mules do when they fall into wells."
            }, {
                "paragraph": "After carefully assessing the situation, the farmer sympathized with the mule, but decided that neither the mule nor the well was worth the trouble of saving. Instead, he called his neighbors together, told them what had happened, and enlisted them to help haul dirt to bury the old mule in the well and put him out of his misery."
            }, {
                "paragraph": "Initially the old mule was hysterical! But as the farmer and his neighbors continued shoveling and the dirt hit his back, a thought struck him. It suddenly dawned on him that every time a shovel load of dirt landed on his back, HE WOULD SHAKE IT OFF AND STEP UP!"
            }, {
                "paragraph": "This he did, blow after blow. “Shake it off and step up… shake it off and step up… shake it off and step up!” He repeated to encourage himself. No matter how painful the blows, or how distressing the situation seemed, the old mule fought panic and just kept right on SHAKING IT OFF AND STEPPING UP!"
            }, {
                "paragraph": "It wasn’t long before the old mule, battered and exhausted, stepped triumphantly over the wall of that well! What seemed like it would bury him actually helped him … all because of the manner in which he handled his adversity."
            }, {
                "paragraph": "THAT’S LIFE! If we face our problems and respond to them positively, and refuse to give in to panic, bitterness, or self-pity."
            }]
        },

        {
            "id": 13,
            "title": "Determination and Persistence",
            "description": [{
                "paragraph": "This is a real life story of engineer John Roebling building the Brooklyn Bridge in New York, USA back in 1870. The bridge was completed in 1883, after 13 years."
            }, {
                "paragraph": ""
            }, {
                "paragraph": "In 1883, a creative engineer named John Roebling was inspired by an idea to build a spectacular bridge connecting New York with the Long Island. However bridge building experts throughout the world thought that this was an impossible feat and told Roebling to forget the idea. It just could not be done. It was not practical. It had never been done before."
            }, {
                "paragraph": "Roebling could not ignore the vision he had in his mind of this bridge. He thought about it all the time and he knew deep in his heart that it could be done. He just had to share the dream with someone else. After much discussion and persuasion he managed to convince his son Washington, an up and coming engineer, that the bridge in fact could be built."
            }, {
                "paragraph": "Working together for the first time, the father and son developed concepts of how it could be accomplished and how the obstacles could be overcome. With great excitement and inspiration, and the headiness of a wild challenge before them, they hired their crew and began to build their dream bridge."
            }, {
                "paragraph": "The project started well, but when it was only a few months underway a tragic accident on the site took the life of John Roebling. Washington was also injured and left with a certain amount of brain damage, which resulted in him not being able to talk or walk."
            }, {
                "paragraph": "“We told them so.” “Crazy men and their crazy dreams.” “It’s foolish to chase wild visions.”"
            }, {
                "paragraph": "Everyone had a negative comment to make and felt that the project should be scrapped since the Roeblings were the only ones who knew how the bridge could be built."
            }, {
                "paragraph": "In spite of his handicap Washington was never discouraged and still had a burning desire to complete the bridge and his mind was still as sharp as ever. He tried to inspire and pass on his enthusiasm to some of his friends, but they were too daunted by the task."
            }, {
                "paragraph": "As he lay on his bed in his hospital room, with the sunlight streaming through the windows, a gentle breeze blew the flimsy white curtains apart and he was able to see the sky and the tops of the trees outside for just a moment."
            }, {
                "paragraph": "It seemed that there was a message for him not to give up. Suddenly an idea hit him. All he could do was move one finger and he decided to make the best use of it. By moving this, he slowly developed a code of communication with his wife."
            }, {
                "paragraph": "He touched his wife’s arm with that finger, indicating to her that he wanted her to call the engineers again. Then he used the same method of tapping her arm to tell the engineers what to do. It seemed foolish but the project was under way again."
            }, {
                "paragraph": "For 13 years Washington tapped out his instructions with his finger on his wife’s arm, until the bridge was finally completed. Today the spectacular Brooklyn Bridge stands in all its glory as a tribute to the triumph of one man’s indomitable spirit and his determination not to be defeated by circumstances. It is also a tribute to the engineers and their team work, and to their faith in a man who was considered mad by half the world. It stands too as a tangible monument to the love and devotion of his wife who for 13 long years patiently decoded the messages of her husband and told the engineers what to do."
            }, {
                "paragraph": "Perhaps this is one of the best examples of a never-say-die attitude that overcomes a terrible physical handicap and achieves an impossible goal."
            }, {
                "paragraph": "Often when we face obstacles in our day-to-day life, our hurdles seem very small in comparison to what many others have to face. The Brooklyn Bridge shows us that dreams that seem impossible can be realised with determination and persistence, no matter what the odds are."
            }]
        },

        {
            "id": 14,
            "title": "What goes around comes around",
            "description": [{
                "paragraph": "One day a man saw an old lady, stranded on the side of the road, but even in the dim light of day, he could see she needed help. So he pulled up in front of her Mercedes and got out. His Pontiac was still sputtering when he approached her."
            }, {
                "paragraph": "Even with the smile on his face, she was worried. No one had stopped to help for the last hour or so. Was he going to hurt her? He didn’t look safe; he looked poor and hungry. He could see that she was frightened, standing out there in the cold. He knew how she felt. It was those chills which only fear can put in you. He said, “I’m here to help you, ma’am. Why don’t you wait in the car where it’s warm? By the way, my name is Bryan Anderson.”"
            }, {
                "paragraph": "Well, all she had was a flat tire, but for an old lady, that was bad enough. Bryan crawled under the car looking for a place to put the jack, skinning his knuckles a time or two. Soon he was able to change the tire. But he had to get dirty and his hands hurt."
            }, {
                "paragraph": "As he was tightening up the lug nuts, she rolled down the window and began to talk to him. She told him that she was from St. Louis and was only just passing through. She couldn’t thank him enough for coming to her aid."
            }, {
                "paragraph": "Bryan just smiled as he closed her trunk. The lady asked how much she owed him. Any amount would have been all right with her. She already imagined all the awful things that could have happened had he not stopped. Bryan never thought twice about being paid. This was not a job to him. This was helping someone in need, and God knows there were plenty, who had given him a hand in the past. He had lived his whole life that way, and it never occurred to him to act any other way."
            }, {
                "paragraph": "He told her that if she really wanted to pay him back, the next time she saw someone who needed help, she could give that person the assistance they needed, and Bryan added, “And think of me.”"
            }, {
                "paragraph": "He waited until she started her car and drove off. It had been a cold and depressing day, but he felt good as he headed for home, disappearing into the twilight."
            }, {
                "paragraph": "A few miles down the road the lady saw a small cafe. She went in to grab a bite to eat, and take the chill off before she made the last leg of her trip home. It was a dingy looking restaurant. Outside were two old gas pumps. The whole scene was unfamiliar to her. The waitress came over and brought a clean towel to wipe her wet hair. She had a sweet smile, one that even being on her feet for the whole day couldn’t erase. The lady noticed the waitress was nearly eight months pregnant, but she never let the strain and aches change her attitude. The old lady wondered how someone who had so little could be so giving to a stranger. Then she remembered Bryan."
            }, {
                "paragraph": "After the lady finished her meal, she paid with a hundred dollar bill. The waitress quickly went to get change for her hundred dollar bill, but the old lady had slipped right out the door. She was gone by the time the waitress came back. The waitress wondered where the lady could be. Then she noticed something written on the napkin."
            }, {
                "paragraph": "There were tears in her eyes when she read what the lady wrote: “You don’t owe me anything. I have been there too. Somebody once helped me out, the way I’m helping you. If you really want to pay me back, here is what you do, do not let this chain of love end with you.” Under the napkin were four more $100 bills."
            }, {
                "paragraph": "Well, there were tables to clear, sugar bowls to fill, and people to serve, but the waitress made it through another day. That night when she got home from work and climbed into bed, she was thinking about the money and what the lady had written. How could the lady have known how much she and her husband needed it? With the baby due next month, it was going to be hard… She knew how worried her husband was, and as he lay sleeping next to her, she gave him a soft kiss and whispered soft and low, “Everything’s going to be all right. I love you, Bryan Anderson.”"
            }, {
                "paragraph": "There is an old saying “What goes around comes around.”"
            }]
        },

        {
            "id": 15,
            "title": "Temper control",
            "description": [{
                "paragraph": "Once upon a time there was a little boy who was talented, creative, handsome, and extremely bright. A natural leader. The kind of person everyone would normally have wanted on their team or project. But he was also self-centered and had a very bad temper. When he got angry, he usually said, and often did, some very hurtful things. In fact, he seemed to have little regard for those around him. Even friends. So, naturally, he had few. “But,” he told himself, “that just shows how stupid most people are!”"
            }, {
                "paragraph": "As he grew, his parents became concerned about this personality flaw, and pondered long and hard about what they should do. Finally, the father had an idea. And he struck a bargain with his son. He gave him a bag of nails, and a BIG hammer. “Whenever you lose your temper,” he told the boy, “I want you to really let it out. Just take a nail and drive it into the oak boards of that old fence out back. Hit that nail as hard as you can!”"
            }, {
                "paragraph": "Of course, those weathered oak boards in that old fence were almost as tough as iron, and the hammer was mighty heavy, so it wasn’t nearly as easy as it first sounded. Nevertheless, by the end of the first day, the boy had driven 37 nails into the fence (That was one angry young man!). Gradually, over a period of weeks, the number dwindled down. Holding his temper proved to be easier than driving nails into the fence! Finally the day came when the boy didn’t lose his temper at all. He felt mighty proud as he told his parents about that accomplishment."
            }, {
                "paragraph": "“As a sign of your success,” his father responded, “you get to PULL OUT one nail. In fact, you can do that each day that you don’t lose your temper even once.”"
            }, {
                "paragraph": "Well, many weeks passed. Finally one day the young boy was able to report proudly that all the nails were gone."
            }, {
                "paragraph": "At that point, the father asked his son to walk out back with him and take one more good look at the fence. “You have done well, my son,” he said. “But I want you to notice the holes that are left. No matter what happens from now on, this fence will never be the same. Saying or doing hurtful things in anger produces the same kind of result. There will always be a scar. It won’t matter how many times you say you’re sorry, or how many years pass, the scar will still be there. And a verbal wound is as bad as a physical one. People are much more valuable than an old fence. They make us smile. They help us succeed. Some will even become friends who share our joys, and support us through bad times. And, if they trust us, they will also open their hearts to us. That means we need to treat everyone with love and respect. We need to prevent as many of those scars as we can.”"
            }, {
                "paragraph": "A most valuable lesson, don’t you think? And a reminder most of us need from time to time. Everyone gets angry occasionally. The real test is what we DO with it."
            }, {
                "paragraph": "If we are wise, we will spend our time building bridges rather than barriers in our relationships."
            }]
        },

        {
            "id": 16,
            "title": "The Cookie Thief",
            "description": [{
                "paragraph": "A woman was waiting at an airport one night, with several long hours before her flight. She hunted for a book in the airport shops, bought a bag of cookies and found a place to drop."
            }, {
                "paragraph": "She was engrossed in her book but happened to see, that the man sitting beside her, as bold as could be. . .grabbed a cookie or two from the bag in between, which she tried to ignore to avoid a scene."
            }, {
                "paragraph": "So she munched the cookies and watched the clock, as the gutsy cookie thief diminished her stock. She was getting more irritated as the minutes ticked by, thinking, “If I wasn’t so nice, I would blacken his eye.”"
            }, {
                "paragraph": "With each cookie she took, he took one too, when only one was left, she wondered what he would do. With a smile on his face, and a nervous laugh, he took the last cookie and broke it in half."
            }, {
                "paragraph": "He offered her half, as he ate the other, she snatched it from him and thought… oooh, brother. This guy has some nerve and he’s also rude, why he didn’t even show any gratitude!"
            }, {
                "paragraph": "She had never known when she had been so galled, and sighed with relief when her flight was called. She gathered her belongings and headed to the gate, refusing to look back at the thieving ingrate."
            }, {
                "paragraph": "She boarded the plane, and sank in her seat, then she sought her book, which was almost complete. As she reached in her baggage, she gasped with surprise, there was her bag of cookies, in front of her eyes."
            }, {
                "paragraph": "If mine are here, she moaned in despair, the others were his, and he tried to share. Too late to apologize, she realized with grief, that she was the rude one, the ingrate, the thief."
            }, {
                "paragraph": "By Valerie Cox in “A Matter of Perspective” "
            }]
        },

        {
            "id": 17,
            "title": "A gift of love!",
            "description": [{
                "paragraph": "“Can I see my baby?” the happy new mother asked."
            }, {
                "paragraph": "When the bundle was nestled in her arms and she moved the fold of cloth to look upon his tiny face, she gasped. The doctor turned quickly and looked out the tall hospital window. The baby had been born without ears."
            }, {
                "paragraph": "Time proved that the baby’s hearing was perfect. It was only his appearance that was marred. When he rushed home from school one day and flung himself into his mother’s arms, she sighed, knowing that his life was to be a succession of heartbreaks. He blurted out the tragedy. “A boy, a big boy … called me a freak.”"
            }, {
                "paragraph": "He grew up, handsome for his misfortune. A favorite with his fellow students, he might have been class president, but for that. He developed a gift, a talent for literature and music. “But you might mingle with other young people,” his mother reproved him, but felt a kindness in her heart. The boy’s father had a session with the family physician. Could nothing be done? “I believe I could graft on a pair of outer ears, if they could be procured,” the doctor decided."
            }, {
                "paragraph": "Whereupon the search began for a person who would make such a sacrifice for a young man. Two years went by. Then, “You are going to the hospital, Son. Mother and I have someone who will donate the ears you need. But it’s a secret,” said the father. The operation was a brilliant success, and a new person emerged. His talents blossomed into genius, and school and college became a series of triumphs."
            }, {
                "paragraph": "Later he married and entered the diplomatic service. “But I must know!” He urged his father, “Who gave so much for me? I could never do enough for him.” “I do not believe you could,” said the father, “but the agreement was that you are not to know … not yet.” The years kept their profound secret, but the day did come … one of the darkest days that a son must endure. He stood with his father over his mother’s casket. Slowly, tenderly, the father stretched forth a hand and raised the thick, reddish-brown hair to reveal that the mother had no outer ears. “Mother said she was glad she never let her hair be cut,” he whispered gently, “and nobody ever thought Mother less beautiful, did they?”"
            }, {
                "paragraph": "Real beauty lies not in the physical appearance, but in the heart. Real treasure lies not in what that can be seen, but what that cannot be seen. Real love lies not in what is done and known, but in what that is done but not known."
            }]
        },

        {
            "id": 18,
            "title": "Helpless love",
            "description": [{
                "paragraph": "Once upon a time all feelings and emotions went to a coastal island for a vacation. According to their nature, each was having a good time. Suddenly, a warning of an impending storm was announced and everyone was advised to evacuate the island."
            }, {
                "paragraph": "The announcement caused sudden panic. All rushed to their boats. Even damaged boats were quickly repaired and commissioned for duty."
            }, {
                "paragraph": "Yet, Love did not wish to flee quickly. There was so much to do. But as the clouds darkened, Love realised it was time to leave. Alas, there were no boats to spare. Love looked around with hope."
            }, {
                "paragraph": "Just then Prosperity passed by in a luxurious boat. Love shouted, “Prosperity, could you please take me in your boat?”"
            }, {
                "paragraph": "“No,” replied Prosperity, “my boat is full of precious possessions, gold and silver. There is no place for you.”"
            }, {
                "paragraph": "A little later Vanity came by in a beautiful boat. Again Love shouted, “Could you help me, Vanity? I am stranded and need a lift. Please take me with you.”"
            }, {
                "paragraph": "Vanity responded haughtily, “No, I cannot take you with me. My boat will get soiled with your muddy feet.”"
            }, {
                "paragraph": "Sorrow passed by after some time. Again, Love asked for help. But it was to no avail. “No, I cannot take you with me. I am so sad. I want to be by myself.”"
            }, {
                "paragraph": "When Happiness passed by a few minutes later, Love again called for help. But Happiness was so happy that it did not look around, hardly concerned about anyone."
            }, {
                "paragraph": "Love was growing restless and dejected. Just then somebody called out, “Come Love, I will take you with me.” Love did not know who was being so magnanimous, but jumped on to the boat, greatly relieved that she would reach a safe place."
            }, {
                "paragraph": "On getting off the boat, Love met Knowledge. Puzzled, Love inquired, “Knowledge, do you know who so generously gave me a lift just when no one else wished to help?”"
            }, {
                "paragraph": "Knowledge smiled, “Oh, that was Time.”"
            }, {
                "paragraph": "“And why would Time stop to pick me and take me to safety?” Love wondered."
            }, {
                "paragraph": "Knowledge smiled with deep wisdom and replied, “Because only Time knows your true greatness and what you are capable of. Only Love can bring peace and great happiness in this world.”"
            }, {
                "paragraph": "“The important message is that when we are prosperous, we overlook love. When we feel important, we forget love. Even in happiness and sorrow we forget love. Only with time do we realize the importance of love. Why wait that long? Why not make love a part of your life today?”"
            }]
        },

        {
            "id": 19,
            "title": "Positive Thinking",
            "description": [{
                "paragraph": "Jerry was the kind of guy you love to hate. He was always in a good mood and always had something positive to say. When someone would ask him how he was doing, he would reply, “If I were any better, I would be twins!”"
            }, {
                "paragraph": "He was a unique manager because he had several waiters who had followed him around from restaurant to restaurant. The reason the waiters followed Jerry was because of his attitude. He was a natural motivator. If an employee was having a bad day, Jerry was there telling the employee how to look on the positive side of the situation."
            }, {
                "paragraph": "Seeing this style really made me curious, so one day I went up to Jerry and asked him, “I don’t get it! You can’t be a positive person all of the time. How do you do it?” Jerry replied, “Each morning I wake up and say to myself, Jerry, you have two choices today. You can choose to be in a good mood or you can choose to be in a bad mood.’ I choose to be in a good mood. Each time something bad happens, I can choose to be a victim or I can choose to learn from it. I choose to learn from it. Every time someone comes to me complaining, I can choose to accept their complaining or I can point out the positive side of life. I choose the positive side of life.”"
            }, {
                "paragraph": "“Yeah, right, it’s not that easy,” I protested."
            }, {
                "paragraph": "“Yes it is,” Jerry said. “Life is all about choices. When you cut away all the junk, every situation is a choice. You choose how you react to situations. You choose how people will affect your mood. You choose to be in a good mood or bad mood. The bottom line: It’s your choice how you live life.”"
            }, {
                "paragraph": "I reflected on what Jerry said. Soon thereafter, I left the restaurant industry to start my own business. We lost touch, but often thought about him when I made a choice about life instead of reacting to it. Several years later, I heard that Jerry did something you are never supposed to do in a restaurant business: he left the back door open one morning and was held up at gunpoint by three armed robbers. While trying to open the safe, his hand, shaking from nervousness, slipped off the combination. The robbers panicked and shot him. Luckily, Jerry was found relatively quickly and rushed to the local trauma center. After 18 hours of surgery and weeks of intensive care, Jerry was released from the hospital with fragments of the bullets still in his body. I saw Jerry about six months after the accident. When I asked him how he was, he replied, “If I were any better, I’d be twins. Wanna see my scars?”"
            }, {
                "paragraph": "I declined to see his wounds, but did ask him what had gone through his mind as the robbery took place. “The first thing that went through my mind was that I should have locked the back door,” Jerry replied. “Then, as I lay on the floor, I remembered that I had two choices: I could choose to live, or I could choose to die. I chose to live.”"
            }, {
                "paragraph": "“Weren’t you scared? Did you lose consciousness?” I asked. Jerry continued, “The paramedics were great. They kept telling me I was going to be fine. But when they wheeled me into the emergency room and I saw the expressions on the faces of the doctors and nurses, I got really scared. In their eyes, I read, ‘He’s a dead man.’ I knew I needed to take action.”"
            }, {
                "paragraph": "“What did you do?” I asked."
            }, {
                "paragraph": "“Well, there was a big, burly nurse shouting questions at me,” said Jerry. “She asked if I was allergic to anything. ‘Yes,’ I replied. The doctors and nurses stopped working as they waited for my reply… I took a deep breath and yelled, ‘Bullets!’ Over their laughter, I told them, ‘I am choosing to live. Operate on me as if I am alive, not dead.”"
            }, {
                "paragraph": "Jerry lived thanks to the skill of his doctors, but also because of his amazing attitude. I learned from him that every day we have the choice to live fully. Attitude, after all, is everything."
            }, {
                "paragraph": "By Francie Baltazar-Schwartz"
            }, {
                "paragraph": "Let this really sink in- then choose how you start your day tomorrow."
            }]
        },

        {
            "id": 20,
            "title": "The story of a woodcutter",
            "description": [{
                "paragraph": "Once upon a time, a very strong woodcutter asked for a job in a timber merchant and he got it. The pay was really good and so was the work condition. For those reasons, the woodcutter was determined to do his best."
            }, {
                "paragraph": "His boss gave him an axe and showed him the area where he supposed to work."
            }, {
                "paragraph": "The first day, the woodcutter brought 18 trees."
            }, {
                "paragraph": "“Congratulations,” the boss said. “Go on that way!”"
            }, {
                "paragraph": "Very motivated by the boss words, the woodcutter tried harder the next day, but he could only bring 15 trees. The third day he tried even harder, but he could only bring 10 trees. Day after day he was bringing less and less trees."
            }, {
                "paragraph": "“I must be losing my strength”, the woodcutter thought. He went to the boss and apologized, saying that he could not understand what was going on."
            }, {
                "paragraph": "“When was the last time you sharpened your axe?” the boss asked."
            }, {
                "paragraph": "“Sharpen? I had no time to sharpen my axe. I have been very busy trying to cut trees…”"
            }, {
                "paragraph": " "
            }, {
                "paragraph": "Our lives are like that. We sometimes get so busy that we don’t take time to sharpen the “axe”. In today’s world, it seems that everyone is busier than ever, but less happy that ever. "
            }, {
                "paragraph": "Why is that? Could it be that we have forgotten how to stay “sharp”? There’s nothing wrong with activity and hard work. But we should not get so busy that we neglect the truly important things in life, like our personal life, taking time to get close to our Creator, giving more time for our family, taking time to read etc. "
            }, {
                "paragraph": "We all need time to relax, to think and meditate, to learn and grow. If we don’t take the time to sharpen the “axe”, we will become dull and lose our effectiveness. "
            }, {
                "paragraph": "Author: Stephen Covey  From: 7 Habits of Highly Effective People"
            }]
        },

        {
            "id": 21,
            "title": "A bowl of noodles from a stranger",
            "description": [{
                "paragraph": "That night, Sue quarreled with her mother, then stormed out of the house. While enroute, she remembered that she did not have any money in her pocket, she did not even have enough coins to make a phone call home."
            }, {
                "paragraph": "At the same time, she went through a noodle shop, picking up sweet fragrance, she suddenly felt very hungry. She wished for a bowl of noodles, but she had no money!"
            }, {
                "paragraph": "The seller saw her standing wheat faltered before the counter and asked:"
            }, {
                "paragraph": "– Hey little girl, you want to eat a bowl?"
            }, {
                "paragraph": "– But … but I do not carry money … she shyly replied."
            }, {
                "paragraph": "– Okay, I’ll treat you – the seller said – come in, I will cook you a bowl."
            }, {
                "paragraph": "A few minutes later the owner brought her a steaming bowl of noodles. Ate some pieces, Sue cried."
            }, {
                "paragraph": "– What is it? – He asked."
            }, {
                "paragraph": "– Nothing. I am just touched by your kindness! – Sue said as she wiped her tears."
            }, {
                "paragraph": "– Even a stranger on the street gives me a bowl of noodles, and my mother, after a quarrel, chased me out of the house. She is cruel!!"
            }, {
                "paragraph": "The seller sighed:"
            }, {
                "paragraph": "– Girl, why did you think so? Think again. I only gave you a bowl of noodles and you felt that way. Your mother had raised you since you were little, why were you not grateful and disobeyed your mom?"
            }, {
                "paragraph": "Sue was really surprised after hearing that."
            }, {
                "paragraph": "“Why did I not think of that? A bowl of noodles from a stranger made me feel indebted, and my mother has raised me since I was little and I have never felt so, even a little.”"
            }, {
                "paragraph": "On the way home, Sue thought in her head what she would say to her mother when she arrives home: “Mom, I’m sorry. I know it is my fault, please forgive me … ”"
            }, {
                "paragraph": "Once up the steps, Sue saw her mother worried and tired of looking for her everywhere. Upon seeing Sue, her mother gently said: “Sue, come inside honey. You are probably very hungry? I cooked rice and prepared the meal already, come eat while it is still hot …”"
            }, {
                "paragraph": "Can not control any longer, Sue cried in her mom’s hands."
            }, {
                "paragraph": "In life, we sometimes easy to appreciate the small actions of some people around us, but for the relatives, especially parents, we see their sacrifices as a matter of natural …"
            }, {
                "paragraph": "Parental love and concern are the most precious gifts we have been given since birth."
            }, {
                "paragraph": "Parents do not expect us to pay back for nurturing us …… but have we ever appreciated or treasure the unconditional sacrifice of our parents?"
            }]
        },

        {
            "id": 22,
            "title": "Marriage – very touching!",
            "description": [{
                "paragraph": "When I got home that night as my wife served dinner, I held her hand and said, I’ve got something to tell you. She sat down and ate quietly. Again I observed the hurt in her eyes."
            }, {
                "paragraph": "Suddenly I didn’t know how to open my mouth. But I had to let her know what I was thinking. I want a divorce. I raised the topic calmly."
            }, {
                "paragraph": "She didn’t seem to be annoyed by my words, instead she asked me softly, why?"
            }, {
                "paragraph": "I avoided her question. This made her angry. She threw away the chopsticks and shouted at me, you are not a man! That night, we didn’t talk to each other. She was weeping. I knew she wanted to find out what had happened to our marriage. But I could hardly give her a satisfactory answer; she had lost my heart to Jane. I didn’t love her anymore. I just pitied her!"
            }, {
                "paragraph": "With a deep sense of guilt, I drafted a divorce agreement which stated that she could own our house, our car, and 30% stake of my company."
            }, {
                "paragraph": "She glanced at it and then tore it into pieces. The woman who had spent ten years of her life with me had become a stranger. I felt sorry for her wasted time, resources and energy but I could not take back what I had said for I loved Jane so dearly. Finally she cried loudly in front of me, which was what I had expected to see. To me her cry was actually a kind of release. The idea of divorce which had obsessed me for several weeks seemed to be firmer and clearer now."
            }, {
                "paragraph": "The next day, I came back home very late and found her writing something at the table. I didn’t have supper but went straight to sleep and fell asleep very fast because I was tired after an eventful day with Jane."
            }, {
                "paragraph": "When I woke up, she was still there at the table writing. I just did not care so I turned over and was asleep again."
            }, {
                "paragraph": "In the morning she presented her divorce conditions: she didn’t want anything from me, but needed a month’s notice before the divorce. She requested that in that one month we both struggle to live as normal a life as possible. Her reasons were simple: our son had his exams in a month’s time and she didn’t want to disrupt him with our broken marriage."
            }, {
                "paragraph": "This was agreeable to me. But she had something more, she asked me to recall how I had carried her into out bridal room on our wedding day."
            }, {
                "paragraph": "She requested that every day for the month’s duration I carry her out of our bedroom to the front door every morning. I thought she was going crazy. Just to make our last days together bearable I accepted her odd request."
            }, {
                "paragraph": "I told Jane about my wife’s divorce conditions. She laughed loudly and thought it was absurd. No matter what tricks she applies, she has to face the divorce, she said scornfully."
            }, {
                "paragraph": "My wife and I hadn’t had any body contact since my divorce intention was explicitly expressed. So when I carried her out on the first day, we both appeared clumsy. Our son clapped behind us, daddy is holding mommy in his arms. His words brought me a sense of pain. From the bedroom to the sitting room, then to the door, I walked over ten meters with her in my arms. She closed her eyes and said softly; don’t tell our son about the divorce. I nodded, feeling somewhat upset. I put her down outside the door. She went to wait for the bus to work. I drove alone to the office."
            }, {
                "paragraph": "On the second day, both of us acted much more easily. She leaned on my chest. I could smell the fragrance of her blouse. I realized that I hadn’t looked at this woman carefully for a long time. I realized she was not young any more. There were fine wrinkles on her face, her hair was graying! Our marriage had taken its toll on her. For a minute I wondered what I had done to her."
            }, {
                "paragraph": "On the fourth day, when I lifted her up, I felt a sense of intimacy returning. This was the woman who had given ten years of her life to me."
            }, {
                "paragraph": "On the fifth and sixth day, I realized that our sense of intimacy was growing again. I didn’t tell Jane about this. It became easier to carry her as the month slipped by. Perhaps the everyday workout made me stronger."
            }, {
                "paragraph": "She was choosing what to wear one morning. She tried on quite a few dresses but could not find a suitable one. Then she sighed, all my dresses have grown bigger. I suddenly realized that she had grown so thin, that was the reason why I could carry her more easily."
            }, {
                "paragraph": "Suddenly it hit me… she had buried so much pain and bitterness in her heart. Subconsciously I reached out and touched her head."
            }, {
                "paragraph": "Our son came in at the moment and said, Dad, it’s time to carry mom out. To him, seeing his father carrying his mother out had become an essential part of his life. My wife gestured to our son to come closer and hugged him tightly. I turned my face away because I was afraid I might change my mind at this last minute. I then held her in my arms, walking from the bedroom, through the sitting room, to the hallway. Her hand surrounded my neck softly and naturally. I held her body tightly; it was just like our wedding day."
            }, {
                "paragraph": "But her much lighter weight made me sad. On the last day, when I held her in my arms I could hardly move a step. Our son had gone to school. I held her tightly and said, I hadn’t noticed that our life lacked intimacy."
            }, {
                "paragraph": "I drove to office… jumped out of the car swiftly without locking the door. I was afraid any delay would make me change my mind… I walked upstairs. Jane opened the door and I said to her, Sorry, Jane, I do not want the divorce anymore."
            }, {
                "paragraph": "She looked at me, astonished, and then touched my forehead. Do you have a fever? She said. I moved her hand off my head. Sorry, Jane, I said, I won’t divorce. My marriage life was boring probably because she and I didn’t value the details of our lives, not because we didn’t love each other anymore. Now I realize that since I carried her into my home on our wedding day I am supposed to hold her until death do us apart."
            }, {
                "paragraph": "Jane seemed to suddenly wake up. She gave me a loud slap and then slammed the door and burst into tears. I walked downstairs and drove away."
            }, {
                "paragraph": "At the floral shop on the way, I ordered a bouquet of flowers for my wife. The salesgirl asked me what to write on the card. I smiled and wrote, I’ll carry you out every morning until death do us apart."
            }, {
                "paragraph": "That evening I arrived home, flowers in my hands, a smile on my face, I run up stairs, only to find my wife in the bed – dead."
            }, {
                "paragraph": "My wife had been fighting CANCER for months and I was so busy with Jane to even notice. She knew that she would die soon and she wanted to save me from the whatever negative reaction from our son, in case we push thru with the divorce –At least, in the eyes of our son— I’m a loving husband…"
            }, {
                "paragraph": "The small details of your lives are what really matter in a relationship. It is not the mansion, the car, property, the money in the bank. These create an environment conducive for happiness but cannot give happiness in themselves. So find time to be your spouse’s friend and do those little things for each other that build intimacy. Do have a real happy marriage!"
            }]
        },

        {
            "id": 23,
            "title": "Let go of your Stresses!",
            "description": [{
                "paragraph": "A psychologist walked around a room while teaching stress management to an audience. As she raised a glass of water, everyone expected they’d be asked the “half empty or half full” question. Instead, with a smile on her face, she inquired: ”How heavy is this glass of water?”"
            }, {
                "paragraph": "Answers called out ranged from 8 oz. to 20 oz."
            }, {
                "paragraph": "She replied, “The absolute weight doesn’t matter. It depends on how long I hold it. If I hold it for a minute, it’s not a problem. If I hold it for an hour, I’ll have an ache in my arm. If I hold it for a day, my arm will feel numb and paralyzed. In each case, the weight of the glass doesn’t change, but the longer I hold it, the heavier it becomes.”"
            }, {
                "paragraph": "She continued, “The stresses and worries in life are like that glass of water. Think about them for a while and nothing happens. Think about them a bit longer and they begin to hurt. And if you think about them all day long, you will feel paralyzed – incapable of doing anything.”"
            }, {
                "paragraph": "It’s important to remember to let go of your stresses. As early in the evening as you can, put all your burdens down. Don’t carry them through the evening and into the night. Remember to put the glass down!"
            }]
        },

        {
            "id": 24,
            "title": "True story: Real winners don’t give up!",
            "description": [{
                "paragraph": "This is a true story of a young woman who went through the most gruesome fire. When you read her story, you’ll realize that your trials are absolutely nothing compared to what this young girl went through."
            }, {
                "paragraph": "It was September 25, 2000. Maricel Apatan was an 11-year old girl in Zamboanga. On that day, this little girl went with her uncle to draw water."
            }, {
                "paragraph": "Along the way, four men met them. They were carrying long knives. They told her uncle to face down on the ground, and they hacked him on the neck and killed him."
            }, {
                "paragraph": "Maricel was in total shock, especially that the men were their neighbors. She tried to escape, but the men ran after her."
            }, {
                "paragraph": "She cried, “Kuya, ‘wag po, ‘wag n’yo akong tagain! Maawa po kayo sa akin!” (“Don’t kill me! Have mercy on me!”)"
            }, {
                "paragraph": "But they weren’t listening. With a long knife, a man slashed her on the neck too."
            }, {
                "paragraph": "Maricel fell to the ground and lost consciousness."
            }, {
                "paragraph": "When she woke up, she saw a lot of blood. She also saw the feet of the men around her, but she pretended to be dead."
            }, {
                "paragraph": "When they walked away, Maricel ran back home. But along the way, she saw that both her hands were falling off. Because the men hacked them too. She cried but she kept running."
            }, {
                "paragraph": "Sometimes, she would faint and fall to the ground. But she’d regain consciousness and run again."
            }, {
                "paragraph": "When she was near her home, Maricel called her mother."
            }, {
                "paragraph": "Upon seeing her daughter, her mother screamed in terror. She wrapped her bloodied child in a blanket and carried her to the hospital."
            }, {
                "paragraph": "Here was the problem: From her house to the highway, it was a 12-kilometer walk. It took them 4 hours just to reach the highway."
            }, {
                "paragraph": "When they arrived in the hospital, the doctors thought Maricel was going to die. But for 5 hours, they operated on her. It took 25 stitches to stitch together the long knife wound in her neck and back."
            }, {
                "paragraph": "Maricel barely survived. And she lost both of her hands."
            }, {
                "paragraph": "Ironically, the next day was Maricel’s birthday. She was 12 years old."
            }, {
                "paragraph": "But tragedy didn’t end there. When they went home, they saw their home was gone. It was ransacked and burned down by the goons."
            }, {
                "paragraph": "Being very poor, Maricel’s family also didn’t have P50,000 for their hospital bills."
            }, {
                "paragraph": "But God sent many angels along the way to help them."
            }, {
                "paragraph": "Archbishop Antonio Ledesma, a distant relative, paid for hospital bills and helped them bring the criminals to court. They were sentenced to prison."
            }, {
                "paragraph": "Today, she’s staying with the nuns at Regina Rosarii with Sr. Eppie Brasil, O.P."
            }, {
                "paragraph": "But this is the incredible miracle. Instead of staying down, Maricel kept running."
            }, {
                "paragraph": "Instead of cursing God why she had no hands, she now uses her wrists in incredible ways that will boggle your mind."
            }, {
                "paragraph": "Maricel was cited as the most industrious, best in computer, and most courteous in the School for Crippled Children. "
            }, {
                "paragraph": "In 2008, she graduated from a course in Hotel and Restaurant Management. She even received a Gold medal for Arts and Crafts."
            }, {
                "paragraph": "In 2011, she finished her education to be a chef. Yes, a Chef without hands."
            }, {
                "paragraph": "Nothing can stop this young lady from reaching her dreams."
            }, {
                "paragraph": "Real Winners Don’t Give Up!"
            }, {
                "paragraph": "Maricel Apatan, a true winner!!!"
            }]
        },

        {
            "id": 25,
            "title": "The power of determination (true story)",
            "description": [{
                "paragraph": "A true story about athlete Glenn Cunningham who was horribly burned in a schoolhouse fire at the age of 8. Doctors predicted he would never walk again. Determined to walk, Glenn would throw himself off his wheelchair and pull his body across the yard and along a fence. Twenty-two months later, he took his first steps and through sheer determination, learned to run despite the pain…"
            }, {
                "paragraph": "The little country schoolhouse was heated by an old-fashioned, pot-bellied coal stove. A little boy had the job of coming to school early each day to start the fire and warm the room before his teacher and his classmates arrived."
            }, {
                "paragraph": "One morning they arrived to find the schoolhouse engulfed in flames. They dragged the unconscious little boy out of the flaming building more dead than alive. He had major burns over the lower half of his body and was taken to a nearby county hospital."
            }, {
                "paragraph": "From his bed the dreadfully burned, semi-conscious little boy faintly heard the doctor talking to his mother. The doctor told his mother that her son would surely die – which was for the best, really – for the terrible fire had devastated the lower half of his body."
            }, {
                "paragraph": "But the brave boy didn’t want to die. He made up his mind that he would survive. Somehow, to the amazement of the physician, he did survive. When the mortal danger was past, he again heard the doctor and his mother speaking quietly. The mother was told that since the fire had destroyed so much flesh in the lower part of his body, it would almost be better if he had died, since he was doomed to be a lifetime cripple with no use at all of his lower limbs."
            }, {
                "paragraph": "Once more the brave boy made up his mind. He would not be a cripple. He would walk. But unfortunately from the waist down, he had no motor ability. His thin legs just dangled there, all but lifeless."
            }, {
                "paragraph": "Ultimately he was released from the hospital. Every day his mother would massage his little legs, but there was no feeling, no control, nothing. Yet his determination that he would walk was as strong as ever."
            }, {
                "paragraph": "When he wasn’t in bed, he was confined to a wheelchair. One sunny day his mother wheeled him out into the yard to get some fresh air. This day, instead of sitting there, he threw himself from the chair. He pulled himself across the grass, dragging his legs behind him."
            }, {
                "paragraph": "He worked his way to the white picket fence bordering their lot. With great effort, he raised himself up on the fence. Then, stake by stake, he began dragging himself along the fence, resolved that he would walk. He started to do this every day until he wore a smooth path all around the yard beside the fence. There was nothing he wanted more than to develop life in those legs."
            }, {
                "paragraph": "Ultimately through his daily massages, his iron persistence and his resolute determination, he did develop the ability to stand up, then to walk haltingly, then to walk by himself – and then – to run."
            }, {
                "paragraph": "He began to walk to school, then to run to school, to run for the sheer joy of running. Later in college he made the track team."
            }, {
                "paragraph": "Still later in Madison Square Garden this young man who was not expected to survive, who would surely never walk, who could never hope to run – this determined young man, Dr. Glenn Cunningham, ran the world’s fastest mile**!"
            }, {
                "paragraph": "Story Told By Burt Dubin, Developer of Speaking Success System."
            }, {
                "paragraph": "**On June 16, 1934, Glenn Cunningham ran the mile in 4:06.8 minutes, breaking the world’s record. His effort portrays that whatever you want to create in your life is yours for the making. As long as you desire it enough and allow your will to guide you, you can have and be whatever your heart desires. The only one that can put limits on our personal will is ourselves. Develop and encourage your will to create and all the forces of nature within and without will help you bring your desire to pass."
            }, {
                "paragraph": "Cunningham at 1936 Games."
            }, {
                "paragraph": "Glenn Cunningham and Wife at Their Range."
            }]
        },

        {
            "id": 26,
            "title": "The loser who never gave up!",
            "description": [{
                "paragraph": "When he was a little boy his uncle called him “Sparky”, after a comic-strip horse named Spark Plug. School was all but impossible for Sparky."
            }, {
                "paragraph": "He failed every subject in the eighth grade. He flunked physics in high school, getting a grade of zero. He also flunked Latin, algebra and English. And his record in sports wasn’t any better. Though he did manage to make the school’s golf team, he promptly lost the only important match of the season. Oh, there was a consolation match; he lost that too."
            }, {
                "paragraph": "Throughout his youth, Sparky was awkward socially. It wasn’t that the other students disliked him; it’s just that no one really cared all that much. In fact, Sparky was astonished if a classmate ever said hello to him outside of school hours. There’s no way to tell how he might have done at dating. He never once asked a girl out in high school. He was too afraid of being turned down… or perhaps laughed at. Sparky was a loser. He, his classmates… everyone knew it. So he learned to live with it. He made up his mind early that if things were meant to work out, they would. Otherwise he would content himself with what appeared to be his inevitable mediocrity."
            }, {
                "paragraph": "One thing WAS important to Sparky, however — drawing. He was proud of his artwork. No one else appreciated it. But that didn’t seem to matter to him. In his senior year of high school, he submitted some cartoons to the the yearbook. The editors rejected the concept. Despite this brush-off, Sparky was convinced of his ability. He even decided to become an artist."
            }, {
                "paragraph": "So, after completing high school, Sparky wrote Walt Disney Studios. They asked for samples of his artwork. Despite careful preparation, it too was rejected. One more confirmation that he was a loser."
            }, {
                "paragraph": "But Sparky still didn’t give up. Instead, he decided to tell his own life’s story in cartoons. The main character would be a little boy who symbolized the perpetual loser and chronic underachiever. You know him well. Because Sparky’s cartoon character went on to become a cultural phenomenon of sorts. People readily identified with this “lovable loser.” He reminded people of the painful and embarrassing moments from their own past, of their pain and their shared humanity. The character soon became famous worldwide: “Charlie Brown.” And Sparky, the boy whose many failures never kept him from trying, whose work was rejected again and again,… is the highly successful cartoonist Charles Schultz. His cartoon strip, “Peanuts,” continues to inspire books, T-shirts and Christmas specials, reminding us, as someone once commented, that life somehow finds a way for all of us, even the losers."
            }, {
                "paragraph": "Sparky’s story reminds us of a very important principle in life. We all face difficulty and discouragement from time to time. We also have a choice in how we handle it. If we’re persistent, if we hold fast to our faith, if we continue to develop the unique talents God has given us, who knows what can happen? We may end up with an insight and an ability to inspire that comes only through hardship. In the end, there are no “losers” with God. Some winners just take longer to develop!"
            }, {
                "paragraph": "By CAPT J. David Atwater, CHC, USN"
            }]
        },

        {
            "id": 27,
            "title": "The miracle of love, true story!",
            "description": [{
                "paragraph": "Like any good mother, when Karen found out that another baby was on the way, she did what she could to help her 3-year-old son, Michael, prepare for a new sibling."
            }, {
                "paragraph": "The new baby was going be a girl, and day after day, night after night, Michael sang to his sister in Mommy’s tummy. He was building a bond of love with his little sister before he even met her."
            }, {
                "paragraph": "The pregnancy progressed normally for Karen, an active member of the the Creek United Methodist Church in Morristown, Tennessee, USA."
            }, {
                "paragraph": "In time, the labor pains came. Soon it was every five minutes, every three, every minute. But serious complications arose during delivery and Karen found herself in hours of labor."
            }, {
                "paragraph": "Finally, after a long struggle, Michael’s little sister was born. But she was in very serious condition. With a siren howling in the night, the ambulance rushed the infant to the neonatal intensive care unit at St. Mary’s Hospital, Knoxville, Tennessee."
            }, {
                "paragraph": "The days inched by. The little girl got worse. The pediatrician had to tell the parents there was very little hope. Be prepared for the worst. Karen and her husband contacted a local cemetery about a burial plot. They had fixed up a special room in their house for their new baby they found themselves having to plan for a funeral."
            }, {
                "paragraph": "Michael, however, kept begging his parents to let him see his sister. “I want to sing to her,” he kept saying."
            }, {
                "paragraph": "Week two in intensive care looked as if a funeral would come before the week was over. Michael kept nagging about singing to his sister, but kids are never allowed in Intensive Care."
            }, {
                "paragraph": "Karen decided to take Michael whether they liked it or not. If he didn’t see his sister right then, he may never see her alive. She dressed him in an oversized scrub suit and marched him into ICU. He looked like a walking laundry basket."
            }, {
                "paragraph": "The head nurse recognized him as a child and bellowed, “Get that kid out of here now. No children are allowed.”"
            }, {
                "paragraph": "The mother rose up strong in Karen and the usually mild-mannered lady glared steel-eyed right into the head nurse’s eyes, her lips a firm line, “He is not leaving until he sings to his sister.”"
            }, {
                "paragraph": "Then Karen towed Michael to his sister’s bedside. He gazed at the tiny infant losing the battle to live. After a moment, he began tossing. In the pure-hearted voice of a 3-year-old, Michael sang:"
            }, {
                "paragraph": "“You are my sunshine, my only sunshine, you make me happy when skies are gray.”"
            }, {
                "paragraph": "Instantly the baby girl seemed to respond. The pulse rate began to calm down and became steady."
            }, {
                "paragraph": "“Keep on singing, Michael,” encouraged Karen with tears in her eyes."
            }, {
                "paragraph": "“You never know, dear, how much I love you, please don’t take my sunshine away.”"
            }, {
                "paragraph": "As Michael sang to his sister, the baby’s ragged, strained breathing became as smooth as a kitten’s purr. “Keep on singing, sweetheart.”"
            }, {
                "paragraph": "“The other night, dear, as I lay sleeping, I dreamed I held you in my arms”. "
            }, {
                "paragraph": "Michael’s little sister began to relax as rest, healing rest, seemed to sweep over her. “Keep singing, Michael.” Tears had now conquered the face of the bossy head nurse. Karen glowed."
            }, {
                "paragraph": "“You are my sunshine, my only sunshine. Please don’t take my sunshine away…”"
            }, {
                "paragraph": "The next day,…the very next day…the little girl was well enough to go home."
            }]
        },

        {
            "id": 28,
            "title": "The miracle of $1.11 – true story!",
            "description": [{
                "paragraph": "Tess was a precocious eight year old when she heard her Mom and Dad talking about her little brother, Andrew. All she knew was that he was very sick and they were completely out of money. They were moving to an apartment complex next month because Daddy didn’t have the money for the doctor bills and our house. Only a very costly surgery could save him now and it was looking like there was no-one to loan them the money. She heard Daddy say to her tearful Mother with whispered desperation, “Only a miracle can save him now.”"
            }, {
                "paragraph": "Tess went to her bedroom and pulled a glass jelly jar from its hiding place in the closet. She poured all the change out on the floor and counted it carefully. Three times, even. The total had to be exactly perfect. No chance here for mistakes. Carefully placing the coins back in the jar and twisting on the cap, she slipped out the back door and made her way 6 blocks to Rexall’s Drug Store with the big red Indian Chief sign above the door. She waited patiently for the pharmacist to give her some attention but he was too busy at this moment. Tess twisted her feet to make a scuffing noise. Nothing. She cleared her throat with the most disgusting sound she could muster. No good."
            }, {
                "paragraph": "Finally she took a quarter from her jar and banged it on the glass counter. That did it!"
            }, {
                "paragraph": "“And what do you want?” the pharmacist asked in an annoyed tone of voice. “I’m talking to my brother from Chicago whom I haven’t seen in ages,” he said without waiting for a reply to his question."
            }, {
                "paragraph": "“Well, I want to talk to you about my brother,” Tess answered back in the same annoyed tone. “He’s really, really sick… and I want to buy a miracle.”"
            }, {
                "paragraph": "“I beg your pardon?” said the pharmacist."
            }, {
                "paragraph": "“His name is Andrew and he has something bad growing inside his head and my Daddy says only a miracle can save him now. So how much does a miracle cost?”"
            }, {
                "paragraph": "“We don’t sell miracles here, little girl. I’m sorry but I can’t help you,” the pharmacist said, softening a little. “Listen, I have the money to pay for it. If it isn’t enough, I will get the rest. Just tell me how much it costs.”"
            }, {
                "paragraph": "The pharmacist’s brother was a well dressed man. He stooped down and asked the little girl, “What kind of a miracle does you brother need?”"
            }, {
                "paragraph": "“I don’t know,” Tess replied with her eyes welling up. “I just know he’s really sick and Mommy says he needs an operation. But my Daddy can’t pay for it, so I want to use my money.”"
            }, {
                "paragraph": "“How much do you have?” asked the man from Chicago. “One dollar and eleven cents,” Tess answered barely audibly. “And it’s all the money I have, but I can get some more if I need to."
            }, {
                "paragraph": "“Well, what a coincidence,” smiled the man. “A dollar and eleven cents – the exact price of a miracle for little brothers.” He took her money in one hand and with the other hand he grasped her mitten and said, “Take me to where you live. I want to see your brother and meet your parents. Let’s see if I have the kind of miracle you need.”"
            }, {
                "paragraph": "That well dressed man was Dr. Carlton Armstrong, a surgeon, specialising in neuro-surgery. The operation was completed without charge and it wasn’t long until Andrew was home again and doing well. Mom and Dad were happily talking about the chain of events that had led them to this place."
            }, {
                "paragraph": "“That surgery,” her Mom whispered. “was a real miracle. I wonder how much it would have cost?”"
            }, {
                "paragraph": "Tess smiled. She knew exactly how much a miracle cost… one dollar and eleven cents … plus the faith of a little child."
            }]
        },

        {
            "id": 29,
            "title": "Christmas miracle – real story!",
            "description": [{
                "paragraph": "This is a real Christmas miracle story, happened in December 1997 in Wisconsin, USA."
            }, {
                "paragraph": "A little girl named Sarah had leukemia and was not expected to live to see Christmas. Her brother and grandmother went to the mall to ask Mark Lenonard who was a professional Santa Claus to visit the hospital to give Sarah the gift of hope through encouragement and paryer."
            }, {
                "paragraph": "A year later Sarah surprised Santa by showing up at the mall where he worked. Here goes the story."
            }, {
                "paragraph": "A little boy and his grandmother came to see Santa at The Mayfair Mall in Wisconsin. The child climbed up on santa’s lap, holding a picture of a little girl."
            }, {
                "paragraph": "“Who is this?” – asked Santa, smiling. “Your friend? Your sister?”"
            }, {
                "paragraph": "“Yes, Santa.” – he replied."
            }, {
                "paragraph": "“My sister, Sarah, who is very sick.” – he said sadly."
            }, {
                "paragraph": "Santa glanced over at the grandmother who was waiting nearby and saw her dabbing her eyes with a tissue."
            }, {
                "paragraph": "“She wanted to come with me to see you, oh, so very much, Santa!” – the child exclaimed. “She misses you.” – he added softly."
            }, {
                "paragraph": "Santa tried to be cheerful and encouraged a smile to the boy’s face, asking him what he wanted Santa to bring him for Christmas."
            }, {
                "paragraph": "When they finished their visit, the grandmother came over to help the child off his lap, and started to say something to Santa, but halted."
            }, {
                "paragraph": "“What is it?” – Santa asked warmly."
            }, {
                "paragraph": "“Well, I know it’s really too much to ask you, Santa, but ..” – the old woman began, shooing her grandson over to one of Santa’s elves to collect the little gift which Santa gave all his young visitors."
            }, {
                "paragraph": "“The girl in the photograph… my granddaughter well, you see … she has leukemia and isn’t expected to make it even through the holidays.” – she said through tear-filled eyes."
            }, {
                "paragraph": "“Is there anyway, Santa, any possible way that you could come see Sarah? That’s all she’s asked for, for Christmas, is to see Santa.”"
            }, {
                "paragraph": "Santa blinked and swallowed hard and told the woman to leave information with his elves as to where Sarah was, and he would see what he could do. Santa thought of little else the rest of that afternoon. He knew what he had to do."
            }, {
                "paragraph": "“What if it were MY child lying in that hospital bed, dying?” – he thought with a sinking heart, “This is the least I can do.”"
            }, {
                "paragraph": "When Santa finished visiting with all the boys and girls that evening, he retrieved from his helper the name of the hospital where Sarah was staying. He asked Rick, the assistant location manager how to get to Children’s Hospital."
            }, {
                "paragraph": "“Why?” – Rick asked, with a puzzled look on his face."
            }, {
                "paragraph": "Santa relayed to him the conversation with Sarah’s grandmother earlier that day."
            }, {
                "paragraph": "“Common….I’ll take you there.” – Rick said softly. Rick drove them to the hospital and came inside with Santa. They found out which room Sarah was in. A pale Rick said he would wait out in the hall."
            }, {
                "paragraph": "Santa quietly peeked into the room through the half-closed door and saw little Sarah on the bed."
            }, {
                "paragraph": "The room was full of what appeared to be her family; there was the grandmother and the girl’s brother he had met earlier that day. A woman whom he guessed was Sarah’s mother stood by the bed, gently pushing Sarah’s thin hair off her forehead."
            }, {
                "paragraph": "And another woman who he discovered later was Sarah’s aunt, sat in a chair near the bed with a weary, sad look on her face. They were talking quietly, and Santa could sense the warmth and closeness of the family, and their love and concern for Sarah."
            }, {
                "paragraph": "Taking a deep breath, and forcing a smile on his face, Santa entered the room, bellowing a hearty, “Ho, ho, ho!”"
            }, {
                "paragraph": "“Santa!” – shrieked little Sarah weakly, as she tried to escape her bed to run to him."
            }, {
                "paragraph": "Santa rushed to her side and gave her a warm hug. A child the tender age of his own son — 9 years old — gazed up at him with wonder and excitement."
            }, {
                "paragraph": "Her skin was pale and her short tresses bore telltale bald patches from the effects of chemotherapy. But all he saw when he looked at her was a pair of huge, blue eyes. His heart melted, and he had to force himself to choke back tears."
            }, {
                "paragraph": "Though his eyes were riveted upon Sarah’s face, he could hear the gasps and quiet sobbing of the women in the room."
            }, {
                "paragraph": "As he and Sarah began talking, the family crept quietly to the bedside one by one, squeezing Santa’s shoulder or his hand gratefully, whispering “Thank you” as they gazed sincerely at him with shining eyes."
            }, {
                "paragraph": "Santa and Sarah talked and talked, and she told him excitedly all the toys she wanted for Christmas, assuring him she’d been a very good girl that year."
            }, {
                "paragraph": "As their time together dwindled, Santa felt led in his spirit to pray for Sarah, and asked for permission from the girl’s mother. She nodded in agreement and the entire family circled around Sarah’s bed, holding hands."
            }, {
                "paragraph": "Santa looked intensely at Sarah and asked her if she believed in angels, “Oh, yes, Santa… I do!” – she exclaimed."
            }, {
                "paragraph": "“Well, I’m going to ask that angels watch over you.” – he said."
            }, {
                "paragraph": "Laying one hand on the child’s head, Santa closed his eyes and prayed. He asked that God touch little Sarah, and heal her body from this disease."
            }, {
                "paragraph": "He asked that angels minister to her, watch and keep her. And when he finished praying, still with eyes closed, he started singing, softly, “Silent Night, Holy Night…. all is calm, all is bright…”"
            }, {
                "paragraph": "The family joined in, still holding hands, smiling at Sarah, and crying tears of hope, tears of joy for this moment, as Sarah beamed at them all."
            }, {
                "paragraph": "When the song ended, Santa sat on the side of the bed again and held Sarah’s frail, small hands in his own."
            }, {
                "paragraph": "“Now, Sarah,” – he said authoritatively, “you have a job to do, and that is to concentrate on getting well. I want you to have fun playing with your friends this summer, and I expect to see you at my house at Mayfair Mall this time next year!”"
            }, {
                "paragraph": "He knew it was risky proclaiming that to this little girl who had terminal cancer, but he ‘had’ to. He had to give her the greatest gift he could — not dolls or games or toys — but the gift of HOPE."
            }, {
                "paragraph": "“Yes, Santa!” – Sarah exclaimed, her eyes bright. He leaned down and kissed her on the forehead and left the room."
            }, {
                "paragraph": "Out in the hall, the minute Santa’s eyes met Rick’s, a look passed between them and they wept unashamed."
            }, {
                "paragraph": "Sarah’s mother and grandmother slipped out of the room quickly and rushed to Santa’s side to thank him."
            }, {
                "paragraph": "“My only child is the same age as Sarah.” – he explained quietly. “This is the least I could do.”"
            }, {
                "paragraph": "They nodded with understanding and hugged him."
            }, {
                "paragraph": "One year later, Santa Mark was again back on the set in Milwaukee for his six-week, seasonal job which he so loves to do. Several weeks went by and then one day a child came up to sit on his lap."
            }, {
                "paragraph": "“Hi, Santa! Remember me?!”"
            }, {
                "paragraph": "“Of course, I do.” – Santa proclaimed (as he always does), smiling down at her. After all, the secret to being a ‘good’ Santa is to always make each child feel as if they are the ‘only’ child in the world at that moment."
            }, {
                "paragraph": "“You came to see me in the hospital last year!”"
            }, {
                "paragraph": "Santa’s jaw dropped. Tears immediately sprang in his eyes, and he grabbed this little miracle and held her to his chest."
            }, {
                "paragraph": "“Sarah!” – he exclaimed. He scarcely recognized her, for her hair was long and silky and her cheeks were rosy — much different from the little girl he had visited just a year before."
            }, {
                "paragraph": "He looked over and saw Sarah’s mother and grandmother in the sidelines smiling and waving and wiping their eyes."
            }, {
                "paragraph": "That was the best Christmas ever for Santa Claus."
            }, {
                "paragraph": "He had witnessed –and been blessed to be instrumental in bringing about — this miracle of hope. This precious little child was healed. Cancer-free. Alive and well. He silently looked up to Heaven and humbly whispered, “Thank you, Father. ‘Tis a very, Merry Christmas!”"
            }]
        },

        {
            "id": 30,
            "title": "Military Story: True Friend",
            "description": [{
                "paragraph": "Horror gripped the heart of the World War I soldier as he saw his lifelong friend fall in battle. Caught in a trench with continuous gunfire whizzing over his head, the soldier asked his lieutenant if he might go out into the “no man’s land” between the trenches to bring his fallen comrade back."
            }, {
                "paragraph": "“You can go,” said the lieutenant, “but i don’t think it will be worth it. Your friend is probably dead and you may throw your life away.” The lieutenant’s advice didn’t matter, and the soldier went anyway. Miraculously he managed to reach his friend, hoist him onto his shoulder and bring him back to their company’s trench. As the two of them tumbled in together to the bottom of the trench, the officer checked the wounded soldier, and then looked kindly at his friend."
            }, {
                "paragraph": "“I told you it wouldn’t be worth it,” he said. “Your friend is dead and you are mortally wounded.”"
            }, {
                "paragraph": "“It was worth it, though, sir,” said the soldier."
            }, {
                "paragraph": "“What do you mean; worth it?” responded the Lieutenant. “Your friend is dead.”"
            }, {
                "paragraph": "“Yes, Sir” the private answered. “But it was worth it because when I got to him, he was still alive and I had the satisfaction of hearing him saying, “Jim…, I knew you’d come.”"
            }, {
                "paragraph": ""
            }, {
                "paragraph": "Many times in life, whether a thing is worth doing or not, really depends on how u looks at it. Take up all your courage and do something your heart tells you to do so that you may not regret not doing it later in your life. May each and every one of you be blessed with the company of TRUE FRIENDS. A true friend is one who walks in, when the rest of the world walks out. War doesn’t determine who’s right. War only determines who’s left."
            }]
        },

        {
            "id": 31,
            "title": "A beautiful true love story",
            "description": [{
                "paragraph": "One day, a young guy and a young girl fell in love."
            }, {
                "paragraph": "But the guy came from a poor family. The girl’s parents weren’t too happy."
            }, {
                "paragraph": "So the young man decided not only to court the girl but to court her parents as well. In time, the parents saw that he was a good man and was worthy of their daughter’s hand."
            }, {
                "paragraph": "But there was another problem: The man was a soldier. Soon, war broke out and he was being sent overseas for a year.  The week before he left, the man knelt on his knee and asked his lady love, “Will you marry me?” She wiped a tear, said yes, and they were engaged. They agreed that when he got back in one year, they would get married."
            }, {
                "paragraph": "But tragedy struck. A few days after he left, the girl had a major vehicular accident. It was a head-on collision."
            }, {
                "paragraph": "When she woke up in the hospital, she saw her father and mother crying. Immediately, she knew there was something wrong."
            }, {
                "paragraph": "She later found out that she suffered brain injury. The part of her brain that controlled her face muscles was damaged. Her once lovely face was now disfigured. She cried as she saw herself in the mirror. “Yesterday, I was beautiful. Today, I’m a monster.” Her body was also covered with so many ugly wounds."
            }, {
                "paragraph": "Right there and then, she decided to release her fiancé from their promise. She knew he wouldn’t want her anymore. She would forget about him and never see him again."
            }, {
                "paragraph": "For one year, the soldier wrote many letters—but she wouldn’t answer. He phoned her many times but she wouldn’t return her calls."
            }, {
                "paragraph": "But after one year, the mother walked into her room and announced, “He’s back from the war.”"
            }, {
                "paragraph": "The girl shouted, “No! Please don’t tell him about me. Don’t tell him I’m here!”"
            }, {
                "paragraph": "The mother said, “He’s getting married,” and handed her a wedding invitation."
            }, {
                "paragraph": "The girl’s heart sank. She knew she still loved him—but she had to forget him now."
            }, {
                "paragraph": "With great sadness, she opened the wedding invitation."
            }, {
                "paragraph": "And then she saw her name on it!"
            }, {
                "paragraph": "Confused, she asked, “What is this?”"
            }, {
                "paragraph": "That was when the young man entered her room with a bouquet of flowers. He knelt beside her and asked, “Will you marry me?”"
            }, {
                "paragraph": "The girl covered her face with her hands and said, “I’m ugly!”"
            }, {
                "paragraph": "The man said, “Without your permission, your mother sent me your photos. When I saw your photos, I realized that nothing has changed. You’re still the person I fell in love. You’re still as beautiful as ever. Because I love you!”"
            }]
        },

        {
            "id": 32,
            "title": "The Marine’s Father",
            "description": [{
                "paragraph": "A nurse took the tired, anxious serviceman to the bedside. “Your son is here,” she said to the old man. She had to repeat the words several times before the patient’s eyes opened."
            }, {
                "paragraph": "Heavily sedated because of the pain of his heart attack, he dimly saw the young uniformed Marine standing outside the oxygen tent. He reached out his hand. The Marine wrapped his toughened fingers around the old man’s limp ones, squeezing a message of love and encouragement."
            }, {
                "paragraph": "The nurse brought a chair so that the Marine could sit beside the bed. All through the night the young Marine sat there in the poorly lighted ward, holding the old man’s hand and offering him words of love and strength. Occasionally, the nurse suggested that the Marine move away and rest awhile."
            }, {
                "paragraph": "He refused. Whenever the nurse came into the ward, the Marine was oblivious of her and of the night noises of the hospital – the clanking of the oxygen tank, the laughter of the night staff members exchanging greetings, the cries and moans of the other patients."
            }, {
                "paragraph": "Now and then she heard him say a few gentle words. The dying man said nothing, only held tightly to his son all through the night."
            }, {
                "paragraph": "Along towards dawn, the old man died. The Marine released the now lifeless hand he had been holding and went to tell the nurse. While she did what she had to do, he waited."
            }, {
                "paragraph": "Finally, she returned. She started to offer words of sympathy, but the Marine interrupted her."
            }, {
                "paragraph": "“Who was that man?” he asked."
            }, {
                "paragraph": "The nurse was startled, “He was your father,” she answered."
            }, {
                "paragraph": "“No, he wasn’t,” the Marine replied. “I never saw him before in my life.”"
            }, {
                "paragraph": "“Then why didn’t you say something when I took you to him?”"
            }, {
                "paragraph": "“I knew right away there had been a mistake, but I also knew he needed his son, and his son just wasn’t here. When I realized that he was too sick to tell whether or not I was his son, knowing how much he needed me, I stayed.”"
            }]
        },

        {
            "id": 33,
            "title": "Military’s love… in sickness!",
            "description": [{
                "paragraph": "The passengers on the bus watched sympathetically as the attractive young woman with the white cane made her way carefully up the steps. She paid the driver and, using her hands to feel the location of the seats, walked down the aisle and found the seat he’d told her was empty. Then she settled in, placed her briefcase on her lap and rested her cane against her leg."
            }, {
                "paragraph": "It had been a year since Susan, 34, became blind. Due to a medical misdiagnosis she had been rendered sightless, and she was suddenly thrown into a world of darkness, anger, frustration and self-pity. And all she had to cling to was her husband, Mark."
            }, {
                "paragraph": "Mark was an Air Force officer and he loved Susan with all his heart. When she first lost her sight, he watched her sink into despair and was determined to help his wife gain the strength and confidence she needed to become independent again."
            }, {
                "paragraph": "Finally, Susan felt ready to return to her job, but how would she get there? She used to take the bus, but was now too frightened to get around the city by herself. Mark volunteered to drive her to work each day, even though they worked at opposite ends of the city. At first, this comforted Susan, and fulfilled Mark’s need to protect his sightless wife who was so insecure about performing the slightest task. Soon, however, Mark realized the arrangement wasn’t working. Susan is going to have to start taking the bus again, he admitted to himself. But she was still so fragile, so angry-how would she react?"
            }, {
                "paragraph": "Just as he predicted, Susan was horrified at the idea of taking the bus again. “I’m blind!,” she responded bitterly. “How am I supposed to know where I am going? I feel like you’re abandoning me.”"
            }, {
                "paragraph": "Mark’s heart broke to hear these words, but he knew what had to be done. He promised Susan that each morning and evening he would ride the bus with her, for as long as it took, until she got the hang of it. And that is exactly what happened. For two solid weeks, Mark, military uniform and all, accompanied Susan to and from work each day. He taught her how to rely on her other senses, specifically her hearing, to determine where she was and how to adapt her new environment. He helped her befriend the bus drivers who could watch out for her, and save her a seat."
            }, {
                "paragraph": "Finally, Susan decided that she was ready to try the trip on her own. Monday morning arrived, and before she left, she threw her arms around Mark, her temporary bus-riding companion, her husband, and her best friend. Her eyes filled with tears of gratitude for his loyalty, his patience, and his love. She said good-bye, and for the first time, they went their separate ways. Monday, Tuesday, Wednesday, Thursday… Each day on her own went perfectly, and Susan had never felt better. She was doing it! She was going to work all by herself."
            }, {
                "paragraph": "On Friday morning, Susan took the bus to work as usual. As she was paying the fare to exit the bus, the driver said, “Boy, I sure do envy you.” Susan wasn’t sure if the driver was speaking to her or not. After all, who on earth would ever envy a blind woman who had struggled just to find the courage to live for the past year?"
            }, {
                "paragraph": "Curious, she asked the driver, “Why do you say that you envy me?” The driver responded, “It must feel good to be taken care of and protected like you are.”"
            }, {
                "paragraph": "Susan had no idea what the driver was talking about, and again asked, “What do you mean?”"
            }, {
                "paragraph": "The driver answered, “You know, every morning for the past week, a fine-looking gentleman in a military uniform has been standing across the corner watching you as you get off the bus. He makes sure you cross the street safely and he watches until you enter your office building. Then he blows you a kiss, gives you a little salute and walks away. You are one lucky lady.”"
            }, {
                "paragraph": "Tears of happiness poured down Susan’s cheeks. For although she couldn’t physically see him, she had always felt Mark’s presence. She was lucky, so lucky, for he had given her a gift more powerful than sight, a gift she didn’t need to see to believe-the gift of love that can bring light where there is darkness."
            }]
        },

        {
            "id": 34,
            "title": "A Smile",
            "description": [{
                "paragraph": "A smile costs nothing, but gives much."
            }, {
                "paragraph": "It enriches those who receive, without making poorer those who give."
            }, {
                "paragraph": "It takes a moment, but the memory of it sometimes lasts forever."
            }, {
                "paragraph": "None is so rich or mighty that he can get along without it, and none is so poor, but that he can be made rich by it."
            }, {
                "paragraph": "A smile creates happiness in the home, fosters good will in business, and is the countersign of friendship."
            }, {
                "paragraph": "It brings rest to the weary, cheer to the discouraged, sunshine to the sad, and it is nature’s best antidote for trouble."
            }, {
                "paragraph": "Yet it cannot be bought, begged, borrowed, or stolen, for it is something that is of no value to anyone, until it is given away."
            }, {
                "paragraph": "Some people are too tired to give you a smile;"
            }, {
                "paragraph": "Give them one of yours, as none needs a smile so much as he who has no more to give."
            }]
        },

        {
            "id": 35,
            "title": "Life",
            "description": [{
                "paragraph": "Sometimes people come into your life and you know right away that they were meant to be there, to serve some sort of purpose, teach you a lesson, or to help you figure out who you are or who you want to become."
            }, {
                "paragraph": "You never know who these people may be – a roommate, a neighbor, a professor, a friend, a lover, or even a complete stranger – but when you lock eyes with them, you know at that very moment they will affect your life in some profound way."
            }, {
                "paragraph": "Sometimes things happen to you that may seem horrible, painful, and unfair at first, but in reflection you find that without overcoming those obstacles you would have never realized your potential, strength, willpower, or heart."
            }, {
                "paragraph": "Illness, injury, love, lost moments of true greatness, and sheer stupidity all occur to test the limits of your soul. Without these small tests, whatever they may be, life would be like a smoothly paved straight flat road to nowhere. It would be safe and comfortable, but dull and utterly pointless."
            }, {
                "paragraph": "The people you meet who affect your life, and the success and downfalls you experience, help to create who you are and who you become. Even the bad experiences can be learned from. In fact, they are sometimes the most important ones."
            }, {
                "paragraph": "If someone loves you, give love back to them in whatever way you can, not only because they love you, but because in a way, they are teaching you to love and how to open your heart and eyes to things."
            }, {
                "paragraph": "If someone hurts you, betrays you, or breaks your heart, forgive them, for they have helped you learn about trust and the importance of being cautious to whom you open your heart."
            }, {
                "paragraph": "Make every day count. Appreciate every moment and take from those moments everything that you possibly can for you may never be able to experience it again. Talk to people that you have never talked to before, and listen to what they have to say."
            }, {
                "paragraph": "Let yourself fall in love, break free, and set your sights high. Hold your head up because you have every right to. Tell yourself you are a great individual and believe in yourself, for if you don’t believe in yourself, it will be hard for others to believe in you."
            }, {
                "paragraph": "You can make anything you wish of your life. Create your own life and then go out and live it with absolutely no regrets."
            }, {
                "paragraph": "And if you love someone tell them, for you never know what tomorrow may have in store."
            }, {
                "paragraph": "Learn a lesson in life each day that you live!"
            }, {
                "paragraph": "Today is the tomorrow you were worried about yesterday."
            }, {
                "paragraph": "Think About it? Was it worth it?"
            }]
        },

        {
            "id": 36,
            "title": "Value and invest in yourself",
            "description": [{
                "paragraph": "If you are into financial investment, you’re probably very familiar with Mr. Warren Buffet (1951–present). He is the most successful investor in the world. His investment strategies are legendary and many people seek to learn after him. "
            }, {
                "paragraph": "Even more respectable, he pledged to give away 99% of his wealth (more than $30 billions at the time of the pledge in 2006) to non-profit foundations, mostly to Bill Gate’s Foundation. "
            }, {
                "paragraph": "Mr. Buffet often travels to universities to give speeches to educate and motivate students. Here is one of his speeches to teach us the value of our body, to invest in ourselves, in education for a great future."
            }, {
                "paragraph": "Imagine that a Genie offers you any car in the world. The catch is that it is the only car you will ever own. What would you do?"
            }, {
                "paragraph": "You would read the manual ten times, change the oil twice as often as required, and you would take fastidious care so that that car remained the car of your dreams forever."
            }, {
                "paragraph": "Think about what this tells you about your body."
            }, {
                "paragraph": "You get only one mind and one body–the same ones you will have at 20, 40, 60, etc."
            }, {
                "paragraph": "Take care of them and maximize their potential. It will be too late to take care of your body and mind (and car) later on. You can maintain them, but it is hard or impossible to undo big mistakes or negligence later on. You do not want to end up with a wreck on your hands."
            }, {
                "paragraph": "Your main asset in life is yourself."
            }, {
                "paragraph": "Treat yourself as a valuable asset. I often explain to students that I would be willing to pay today for a percentage of the future earnings of good students."
            }, {
                "paragraph": "If you value yourself, and invest in yourself, you will be worth a great deal through out your lifetime, both to yourself and to your community."
            }, {
                "paragraph": "Author: Warren Buffet"
            }]
        },

        {
            "id": 37,
            "title": "Benefits of Struggling",
            "description": [{
                "paragraph": "A man found a cocoon of a butterfly. One day a small opening appeared, he sat and watched the butterfly for several hours as it struggled to force its body through that little hole."
            }, {
                "paragraph": "Then it seemed to stop making any progress. It appeared as if it had gotten as far as it could and it could go no farther. Then the man decided to help the butterfly, so he took a pair of scissors and snipped off the remaining bit of the cocoon. The butterfly then emerged easily."
            }, {
                "paragraph": "But it had a swollen body and small, shriveled wings. The man continued to watch the butterfly because he expected that, at any moment, the wings would enlarge and expand to be able to support the body, which would contract in time."
            }, {
                "paragraph": "Neither happened!"
            }, {
                "paragraph": "In fact, the butterfly spent the rest of its life crawling around with a swollen body and shriveled wings."
            }, {
                "paragraph": "It never was able to fly."
            }, {
                "paragraph": "What the man in his kindness and haste did not understand was that the restricting cocoon and the struggle required for the butterfly to get through the tiny opening were God’s way of forcing fluid from the body of the butterfly into its wings so that it would be ready for flight once it achieved its freedom from the cocoon."
            }, {
                "paragraph": "Sometimes struggles are exactly what we need in our life. If God allowed us to go through our life without any obstacles, it would cripple us. We would not be as strong as what we could have been."
            }, {
                "paragraph": "And we could never fly."
            }]
        },


        {
            "id": 38,
            "title": "The doll and the white rose",
            "description": [{
                "paragraph": "I was walking around in a Target store, when I saw a Cashier hand this little boy some money back. The boy couldn’t have been more than 5 or 6 years old. The Cashier said, “I’m sorry, but you don’t have enough money to buy this doll.” Then the little boy turned to the old woman next to him: ”Granny, are you sure I don’t have enough money?” The old lady replied: ”You know that you don’t have enough money to buy this doll, my dear.” Then she asked him to stay there for just 5 minutes while she went to look a round. She left quickly."
            }, {
                "paragraph": "The little boy was still holding the doll in his hand. Finally, I walked toward him and I asked him who he wished to give this doll to. It’s the doll that my sister loved most and wanted so much for Christmas. She was sure that Santa Claus would bring it to her. I replied to him that maybe Santa Claus would bring it to her after all, and not to worry. But he replied to me sadly. “No, Santa Claus can’t bring it to her where she is now. I have to give the doll to my mommy so that she can give it to my sister when she goes there.”"
            }, {
                "paragraph": "His eyes were so sad while saying this. “My Sister has gone to be with God. Daddy says that Mommy is going to see God very soon too, so I thought that she could take the doll with her to give it to my sister.” My heart nearly stopped. The little boy looked up at me and said: “I told daddy to tell mommy not to go yet. I need her to wait until I come back from the mall.” Then he showed me a very nice photo of him where he was laughing. He then told me “I want mommy to take my picture with her so she won’t forget me.” “I love my mommy and I wish she doesn’t have to leave me, but daddy says that she has to go to be with my little sister.” Then he looked again at the doll with sad eyes, very quietly."
            }, {
                "paragraph": "I quickly reached for my wallet and said to the boy. “Suppose we check again, just in case you do have enough money for the doll?” “OK” he said, “I hope I do have enough.” I added some of my money to his without him seeing and we started to count it. There was enough for the doll and even some spare money. The little boy said: “Thank you God for giving me enough money!” Then he looked at me and added, “I asked last night before I went to sleep for God to make sure I had enough money to buy this doll, so that mommy could give It to my sister. He heard me!” “I also wanted to have enough money to buy a white rose for my mommy, but I didn’t dare to ask God for too much. But He gave me enough to buy the doll and a white rose.” “My mommy loves white roses.”"
            }, {
                "paragraph": "A few minutes later, the old lady returned and I left with my basket. I finished my shopping in a totally different state from when I started. I couldn’t get the little boy out of my mind. Then I remembered a local news paper article two days ago, which mentioned a drunk man in a truck, who hit a car occupied by a young woman and a little girl. The little girl died right away, and the mother was left in a critical state. The family had to decide whether to pull the plug on the life-sustaining machine, because the young woman would not be able to recover from the coma. Was this the family of the little boy? Two days after this encounter with the little boy, I read in the news paper that the young woman had passed away. I couldn’t stop myself as I bought a bunch of white roses and I went to the funeral home where the body of the young woman was exposed for people to see and make last wishes before her burial. She was there, in her coffin, holding a beautiful white rose in her hand with the photo of the little boy and the doll placed over her chest. I left the place, teary-eyed, feeling that my life had been changed forever. The love that the little boy had for his mother and his sister is still, to this day, hard to imagine. And in a fraction of a second, a drunk driver had taken all this away from him."
            }, {
                "paragraph": "The value of a man or woman resides in what he or she gives, not in what they are capable of receiving…"
            }]
        },

        {
            "id": 39,
            "title": "A Simple Gesture",
            "description": [{
                "paragraph": "Mark was walking home from school one day when he noticed the boy ahead of him had tripped and dropped all of the books he was carrying, along with two sweaters, a baseball bat, a glove and a small tape recorder."
            }, {
                "paragraph": "Mark knelt down and helped the boy pick up the scattered articles. Since they were going the same way, he helped to carry part of the burden. As they walked Mark discovered the boy’s name was Bill, that he loved video games, baseball and history, and that he was having lots of trouble with his other subjects and that he had just broken up with his girlfriend."
            }, {
                "paragraph": "They arrived at Bill’s home first and Mark was invited in for a Coke and to watch some television. The afternoon passed pleasantly with a few laughs and some shared small talk, then Mark went home. They continued to see each other around school, had lunch together once or twice, then both graduated from junior high school."
            }, {
                "paragraph": "They ended up in the same high school where they had brief contacts over the years. Finally the long awaited senior year came and three weeks before graduation, Bill asked Mark if they could talk."
            }, {
                "paragraph": "Bill reminded him of the day years ago when they had first met. “Did you ever wonder why I was carrying so many things home that day?” asked Bill."
            }, {
                "paragraph": "“You see, I cleaned out my locker because I didn’t want to leave a mess for anyone else. I had stored away some of my mothers sleeping pills and I was going home to commit suicide. But after we spent some time together talking and laughing, I realized that if I had killed myself, I would have missed that time and so many others that might follow. So you see, Mark, when you picked up those books that day, you did a lot more, you saved my life.”"
            }, {
                "paragraph": "– John W. Schlatter (true story)"
            }]
        },

        {
            "id": 40,
            "title": "Love in action",
            "description": [{
                "paragraph": "One night a man came to our house and told me, “There is a family with eight children. They have not eaten for days,” I took some food and I went. When I finally came to the family, I saw the faces of those little children disfigured by hunger. There was no sorrow or sadness in their faces, just the deep pain of hunger. I gave the rice to the mother. She divided it in two, and went out, carrying half the rice with her. When she came back, I asked her, “Where did you go?” She gave me this simple answer, “To my neighbors-they are hungry also.”"
            }, {
                "paragraph": "I was not surprised that she gave–because poor people are generous. But I was surprised that she knew they were hungry. As a rule, when we are suffering, we are so focused on ourselves we have no time for others."
            }, {
                "paragraph": "–Mother Teresa"
            }]
        },

        {
            "id": 41,
            "title": "Enjoy your life at every moment",
            "description": [{
                "paragraph": "Once a fisherman was sitting near seashore, under the shadow of a tree smoking his beedi. Suddenly a rich businessman passing by approached him and enquired as to why he was sitting under a tree smoking and not working. To this the poor fisherman replied that he had caught enough fishes for the day."
            }, {
                "paragraph": "Hearing this the rich man got angry and said: Why don’t you catch more fishes instead of sitting in shadow wasting your time?"
            }, {
                "paragraph": "Fisherman asked: What would I do by catching more fishes?"
            }, {
                "paragraph": "Businessman: You could catch more fishes, sell them and earn more money, and buy a bigger boat."
            }, {
                "paragraph": "Fisherman: What would I do then?"
            }, {
                "paragraph": "Businessman: You could go fishing in deep waters and catch even more fishes and earn even more money."
            }, {
                "paragraph": "Fisherman: What would I do then?"
            }, {
                "paragraph": "Businessman: You could buy many boats and employ many people to work for you and earn even more money."
            }, {
                "paragraph": "Fisherman: What would I do then?"
            }, {
                "paragraph": "Businessman: You could become a rich businessman like me."
            }, {
                "paragraph": "Fisherman: What would I do then?"
            }, {
                "paragraph": "Businessman: You could then enjoy your life peacefully."
            }, {
                "paragraph": "Fisherman: Isn’t that what I am doing now?"
            }, {
                "paragraph": "Moral – You don’t need to wait for tomorrow to be happy and enjoy your life. You don’t even need to be more rich, more powerful to enjoy life. LIFE is at this moment, enjoy it fully."
            }, {
                "paragraph": "As some great men have said “My riches consist not in extent of my possessions but in the fewness of my wants”."
            }]
        },

        {
            "id": 42,
            "title": "Be Content About Your Life",
            "description": [{
                "paragraph": "Wonder if any of you ever had the feeling that life is bad, real bad… and you wish you were in another situation? Do you find that life seems to make things difficult for you, work sucks, life sucks, everything seems to go wrong?"
            }, {
                "paragraph": "It was not until yesterday that I totally changed my views about life; after a conversation with one of my friends."
            }, {
                "paragraph": "He told me despite taking 2 jobs, and bringing back barely above $1000 per month, he is happy as he is. I wonder how he can be as happy as he is now, considering that he has to skimp his life with the low pay to support a pair of old-age parents, in-laws, wife, 2 daughters and the many bills of a household."
            }, {
                "paragraph": "He explained that it was through one incident that he saw in India."
            }, {
                "paragraph": "That happened a few years ago when he was really feeling low and was touring India after a major setback. He said that right in front of his very eyes, he saw an Indian mother chopped off her child’s right hand with a chopper. The helplessness in the mother’s eyes, the scream of the pain from the innocent 4 years old child haunted him until today. You may ask why did the mother do so, has the child been naughty, was the child’s hand infected??"
            }, {
                "paragraph": "No, it was done for two simple words — to beg. The desperate mother deliberately caused the child to be handicapped so that the child can go out to the streets to beg. I cannot accept how this could happen, but it really did, just in another part of the world which I don’t see."
            }, {
                "paragraph": "Taken aback by the scene, he dropped a small piece of bread he was eating half-way. And almost instantly, flock of 5 or 6 children swamp towards this small piece of bread which was then covered with sand, robbing of bits from one another. The natural reaction of hunger. Striken by the happenings, he instructed his guide to drive him to the nearest bakery. He arrived at two bakeries and bought every single loaf of bread he found in the bakeries."
            }, {
                "paragraph": "The owner is dumb-folded, but willing, sold everything. He spent less than $100 to obtain about 400 loaf of bread (this is less than $0.25/per loaf) and spend another $100 to get daily necessities. Off he went in the truck full of bread into the streets. As he distributed the bread and necessities to the children (mostly handicapped) and a few adults, he received cheers and bows from these unfortunate. For the first time in life he wonder how people can give up their dignity for a loaf of bread which cost less than $0.25. He began to ask himself how fortunate he is as a Singaporean. How fortunate he to be able to have a complete body, have a job, have a family, have the chance to complain what food is nice what isn’t, have the chance to be clothed, have the many things that these people in front of him are deprived of…"
            }, {
                "paragraph": "Now I begin to think and feel it, too. Was my life really that bad?"
            }, {
                "paragraph": "Perhaps….no… it should not be bad at all…."
            }, {
                "paragraph": "What about you? Maybe the next time you think you are, think about the child who lost one hand to beg on the streets."
            }]
        },


        {
            "id": 43,
            "title": "Mom’s Last Laugh",
            "description": [{
                "paragraph": "Consumed by my loss, I didn’t notice the hardness of the pew where I sat. I was at the funeral of my dearest friend — my mother. She finally had lost her long battle with cancer. The hurt was so intense, I found it hard to breathe at times."
            }, {
                "paragraph": "Always supportive, mother clapped loudest at my school plays, held a box of tissues while listening to my first heartbreak, comforted me at my father’s death, encouraged me in college, and prayed for me my entire life."
            }, {
                "paragraph": "When mother’s illness was diagnosed, my sister had a new baby and my brother had recently married his childhood sweetheart, so it fell on me, the 27-year-old middle child without entanglements, to take care of her. I counted it an honor."
            }, {
                "paragraph": "“What now, Lord?” I asked sitting in church. My life stretched out before meas an empty abyss. My brother sat stoically with his face toward the cross while clutching his wife’s hand."
            }, {
                "paragraph": "My sister sat slumped against her husband’s shoulder, his arms around her as she cradled their child. All so deeply grieving, no one noticed I sat alone. My place had been with our mother, preparing her meals, helping her walk, taking her to the doctor, seeing to her medication, reading the Bible together. Now she was with the Lord. My work was finished and I was alone."
            }, {
                "paragraph": "I heard a door open and slam shut at the back of the church. Quick footsteps hurried along the carpeted floor. An exasperated young man looked around briefly and then sat next to me. He folded his hands and placed them on his lap. His eyes were brimming with tears."
            }, {
                "paragraph": "He began to sniffle. “I’m late,” he explained, though no explanation was necessary. After several eulogies, he leaned over and commented, “Why do they keep calling Mary by the name of ‘Margaret’?”"
            }, {
                "paragraph": "“Oh” “Because that was her name, Margaret. Never Mary. No one called her ‘Mary,’ I whispered. I wondered why this person couldn’t have sat on the other side of the church. He interrupted my grieving with his tears and fidgeting. Who was this stranger anyway?"
            }, {
                "paragraph": "“No, that isn’t correct,” he insisted, as several people glanced over at us whispering, “Her name is Mary, Mary Peters.”"
            }, {
                "paragraph": "“That isn’t who this is, I replied..”"
            }, {
                "paragraph": "“Isn’t this the Lutheran church?”"
            }, {
                "paragraph": "“No, the Lutheran church is across the street.”"
            }, {
                "paragraph": "“Oh.”"
            }, {
                "paragraph": "“I believe you’re at the wrong funeral, Sir.”"
            }, {
                "paragraph": "The solemnness of the occasion mixed with the realization of the man’s mistake bubbled up inside me and came out as laughter."
            }, {
                "paragraph": "I cupped my hands over my face, hoping it would be interpreted as sobs."
            }, {
                "paragraph": "The creaking pew gave me away. Sharp looks from other mourners only made the situation seem more hilarious. I peeked at the bewildered, misguided man seated beside me.He was laughing, too, as he glanced around, deciding it was too late for an uneventful exit."
            }, {
                "paragraph": "I imagined mother laughing."
            }, {
                "paragraph": "At the final “Amen,” we darted out a door and into the parking lot. “I do believe we’ll be the talk of the town,” he smiled. He said his name was Rick and since he had missed his aunt’s funeral, asked me out for a cup of coffee."
            }, {
                "paragraph": "That afternoon began a lifelong journey for me with this man who attended the wrong funeral, but was in the right place."
            }, {
                "paragraph": "A year after our meeting, we were married at a country church where he was the assistant pastor. This time we both arrived at the same church, right on time. In my time of sorrow, God gave me laughter. In place of loneliness, God gave me love. This past June we celebrated our twenty-second wedding anniversary. Whenever anyone asks us how we met, Rick tells them, “Her mother and my Aunt Mary introduced us, and it’s truly a match made in heaven.”"
            }]
        },

        {
            "id": 44,
            "title": "A box of kisses",
            "description": [{
                "paragraph": "Some time ago, a man punished his 3-year-old daughter for wasting a roll of gold wrapping paper. Money was tight and he became infuriated when the child tried to decorate a box to put under the Christmas tree."
            }, {
                "paragraph": "Nevertheless, the little girl brought the gift to her father the next morning and said, “This is for you, Daddy.” He was embarrassed by his earlier overreaction, but his anger flared again when he found the box was empty."
            }, {
                "paragraph": "He yelled at her, “Don’t you know that when you give someone a present, there’s supposed to be something inside it?”"
            }, {
                "paragraph": "The little girl looked up at him with tears in her eyes and said,”Oh, Daddy, it is not empty. I blew kisses into the box. All for you, Daddy.”"
            }, {
                "paragraph": "The father was crushed. He put his arms around his little girl, and he begged for her forgiveness. It is told that the man kept that gold box by his bed for years and whenever he was discouraged, he would take out an imaginary kiss and remember the love of the child who had put it there."
            }, {
                "paragraph": "In a very real sense, each of us as humans have been given a gold container filled with unconditional love and kisses from our children, friends, family and God. There is no more precious possession anyone could hold."
            }]
        },

        {
            "id": 45,
            "title": "The mouse trap",
            "description": [{
                "paragraph": "A mouse looked through the crack in the wall to see the farmer and his wife open a package. “What food might this contain?” the mouse wondered. He was devastated to discover it was a mousetrap."
            }, {
                "paragraph": "Retreating to the farmyard, the mouse proclaimed the warning: “There is a mousetrap in the house! There is a mousetrap in the house!”"
            }, {
                "paragraph": "The chicken clucked and scratched, raised her head and said, “Mr. Mouse, I can tell this is a grave concern to you, but it is of no consequence to me. I cannot be bothered by it.”"
            }, {
                "paragraph": "The mouse turned to the pig and told him, “There is a mousetrap in the house! There is a mousetrap in the house!” The pig sympathized, but said, “I am so very sorry, Mr. Mouse, but there is nothing I can do about it but pray. Be assured you are in my prayers.”"
            }, {
                "paragraph": "The mouse turned to the cow and said, “There is a mousetrap in the house! There is a mousetrap in the house!” The cow said, “Wow, Mr. Mouse. I’m sorry for you, but it’s no skin off my nose.”"
            }, {
                "paragraph": "So, the mouse returned to the house, head down and dejected, to face the farmer’s mousetrap alone."
            }, {
                "paragraph": "That very night a sound was heard throughout the house – like the sound of a mousetrap catching its prey. The farmer’s wife rushed to see what was caught. In the darkness, she did not see it was a venomous snake whose tail the trap had caught. The snake bit the farmer’s wife. The farmer rushed her to the hospital and she returned home with a fever."
            }, {
                "paragraph": "Everyone knows you treat a fever with fresh chicken soup, so the farmer took his hatchet to the farmyard for the soup’s main ingredient. But his wife’s sickness continued, so friends and neighbors came to sit with her around the clock. To feed them, the farmer butchered the pig. The farmer’s wife did not get well; she died. So many people came for her funeral, the farmer had the cow slaughtered to provide enough meat for all of them."
            }, {
                "paragraph": "The mouse looked upon it all from his crack in the wall with great sadness. So, the next time you hear someone is facing a problem and think it doesn’t concern you, remember, when one of us is threatened, we are all at risk. We are all involved in this journey called life. We must keep an eye out for one another and make an extra effort to encourage one another. Each of us is a vital thread in another person’s tapestry."
            }]
        },

        {
            "id": 46,
            "title": "How the poor live",
            "description": [{
                "paragraph": "One day, a father of a very wealthy family took his son on a trip to the country with the firm purpose of showing his son how poor people live. They spent a couple of days and nights on the farm of what would be considered a very poor family. On their return from their trip, the father asked his son, “How was the trip?”"
            }, {
                "paragraph": "“It was great, Dad.”"
            }, {
                "paragraph": "“Did you see how poor people live?” the father asked."
            }, {
                "paragraph": "“Oh yeah,” said the son."
            }, {
                "paragraph": "“So, tell me, what did you learn from the trip?” asked the father."
            }, {
                "paragraph": "The son answered, “I saw that we have one dog and they had four. We have a pool that reaches to the middle of our garden, and they have a creek that has no end. We have imported lanterns in our garden, and they have the stars at night. Our patio reaches to the front yard, and they have the whole horizon. We have a small piece of land to live on, and they have fields that go beyond our sight. We have servants who serve us, but they serve others. We buy our food, but they grow theirs. We have walls around our property to protect us; they have friends to protect them.”"
            }, {
                "paragraph": "The boy’s father was speechless."
            }, {
                "paragraph": "Then his son added, “Thanks, Dad, for showing me how poor we are.”"
            }]
        },

        {
            "id": 47,
            "title": "Learn and Earn",
            "description": [{
                "paragraph": "Chuan and Jing joined a wholesale company together just after graduation. Both worked very hard."
            }, {
                "paragraph": "After several years, the boss promoted Jing to sales executive but Chuan remained a sales rep. One day Chuan could not take it anymore, tender resignation to the boss and complained the boss did not value hard working staff, but only promoted those who flattered him."
            }, {
                "paragraph": "The boss knew that Chuan worked very hard for the years, but in order to help Chuan realize the difference between him and Jing, the boss asked Chuan to do the following. Go and find out anyone selling water melon in the market? Chuan returned and said yes. The boss asked how much per kg? Chuan went back to the market to ask and returned to inform boss the $12 per kg."
            }, {
                "paragraph": "Boss told Chuan, I will ask Jing the same question? Jing went, returned and said, boss, only one person selling water melon. $12 per kg, $100 for 10 kg, he has inventory of 340 melons. On the table 58 melons, every melon weighs about 15 kg, bought from the South two days ago, they are fresh and red, good quality."
            }, {
                "paragraph": "Chuan was very impressed and realized the difference between himself and Jing. He decided not to resign but to learn from Jing."
            }, {
                "paragraph": "My dear friends, a more successful person is more observant, think more and understand in depth. For the same matter, a more successful person sees several years ahead, while you see only tomorrow. The difference between a year and a day is 365 times, how could you win?"
            }, {
                "paragraph": "Think! how far have you seen ahead in your life? How thoughtful in depth are you?"
            }]
        },

        {
            "id": 48,
            "title": "Don’t Be Afraid",
            "description": [{
                "paragraph": "Here we are, afraid of losing what we have all the time, holding on to it so tight that not a soul can touch it. We think by hiding it from the world, it’s hidden and it’s ours. Nothing is. Nothing ever will be. For, nothing ever was."
            }, {
                "paragraph": "If you think there is anything that you have, that’s yours, be it money, a house, a job, or a girlfriend… it’s nothing but an illusion. It’ll all disappear… in one blow. One blow, my man."
            }, {
                "paragraph": "Here we are, so insecure that we are afraid of re-starting our lives, so we just carry on trying to sort out the current mess. The thought that we should give it all up and just start all over – with nothing – might cross our minds some time, sure, but we get scared and we push away anything that scares us."
            }, {
                "paragraph": "There is nothing I can ever achieve or gain that I cannot lose, in a matter of seconds. You have never gained enough to not be able to lose it all, in just a few minutes. What you think is yours, was never yours and will never be yours. Whatever you make here, you leave here. You came naked and you’re going to go back naked."
            }, {
                "paragraph": "So what are you afraid of?"
            }, {
                "paragraph": "Let all be lost. Let them take away everything. As long as you have your heart beating strong, as long as you have your nostrils working fine, as long as the blood flows in your veins, you will live, you will breathe and you can get it all back… again and again. For, if you can do it once, you can damn well do it again. It’s just a game we play – Life."
            }, {
                "paragraph": "By Rohit Wadhwaney"
            }]
        },

        {
            "id": 49,
            "title": "The Smell of Rain",
            "description": [{
                "paragraph": "A cold March wind danced around the dead of night in Dallas as the Doctor walked into the small hospital room of Diana Blessing. Still groggy from surgery, her husband David held her hand as they braced themselves for the latest news. That afternoon of March 10,1991, complications had forced Diana, only 24 weeks pregnant, to Danae Lu Blessing."
            }, {
                "paragraph": "At 12 inches long and weighing only one pound and nine ounces, they already knew she was perilously premature. Still, the doctor’s soft words dropped like bombs. I don’t think she’s going to make it, he said, as kindly as he could. “There’s only a 10 percent chance she will live through the night, and even then, if by some slim chance she does make it, her future could be a very cruel one.” Numb with disbelief, David and Diana listened as the doctor described the devastating problems Danae would likely face if she survived. She would never walk, she would never talk, she would probably be blind, and she would certainly be prone to other catastrophic conditions from cerebral palsy to complete mental retardation, and on and on. “No! No!” was all Diana could say. She and David, with their 5-year-old son Dustin, had long dreamed of the day they would have a daughter to become a family of four. Now, within a matter of hours, that dream was slipping away."
            }, {
                "paragraph": "Through the dark hours of morning as Danae held onto life by the thinnest thread, Diana slipped in and out of sleep, growing more and more determined that their tiny daughter would live, and live to be a healthy, happy young girl. But David, fully awake and listening to additional dire details of their daughter’s chances of ever leaving the hospital alive, much less healthy, knew he must confront his wife with the inevitable. David walked in and said that we needed to talk about making funeral arrangements. Diana remembers, ‘I felt so bad for him because he was doing everything, trying to include me in what was going on, but I just wouldn’t listen, I couldn’t listen. I said, “No, that is not going to happen, no way! I don’t care what the doctors say; Danae is not going to die! One day she will be just fine, and she will be coming home with us!”"
            }, {
                "paragraph": "As if willed to live by Diana’s determination, Danae clung to life hour after hour, with the help of every medical machine and marvel her miniature body could endure. But as those first days passed, a new agony set in for David and Diana. Because Danae’s under-developed nervous system was essentially raw, the lightest kiss or caress only intensified her discomfort, so they couldn’t even cradle their tiny baby girl against their chests to offer the strength of their love. All they could do, as Danae struggled alone beneath the ultraviolet light in the tangle of tubes and wires, was to pray that God would stay close to their precious little girl. There was never a moment when Danae suddenly grew stronger."
            }, {
                "paragraph": "But as the weeks went by, she did slowly gain an ounce of weight here and an ounce of strength there. At last, when Danae turned two months old, her parents were able to hold her in their arms for the very first time. And two months later-though doctors continued to gently but grimly warn that her chances of surviving, much less living any kind of normal life, were next to zero. Danae went home from the hospital, just as her mother had predicted."
            }, {
                "paragraph": "Today, five years later, Danae is a petite but feisty young girl with glittering gray eyes and an unquenchable zest for life. She shows no signs, what so ever, of any mental or physical impairment. Simply, she is everything a little girl can be and more-but that happy ending is far from the end of her story."
            }, {
                "paragraph": "One blistering afternoon in the summer of 1996 near her home in Irving, Texas, Danae was sitting in her mother’s lap in the bleachers of a local ballpark where her brother Dustin’s baseball team was practicing. As always, Danae was chattering non-stop with her mother and several other adults sitting nearby when she suddenly fell silent. Hugging her arms across her chest, Danae asked, “Do you smell that?” Smelling the air and detecting the approach of a thunderstorm, Diana replied, “Yes, it smells like rain.” Danae closed her eyes and again asked, “Do you smell that?” Once again, her mother replied, “Yes, I think we’re about to get wet, it smells like rain. Still caught in the moment, Danae shook her head, patted her thin shoulders with her small hands and loudly announced, “No, it smells like Him. It smells like God when you lay your head on His chest.” Tears blurred Diana’s eyes as Danae then happily hopped down to play with the other children."
            }, {
                "paragraph": "Before the rains came, her daughter’s words confirmed what Diana and all the members of the extended Blessing family had known, at least in their hearts, all along. During those long days and nights of her first two months of her life, when her nerves were too sensitive for them to touch her, God was holding Danae on His chest and it is His loving scent that she remembers so well."
            }, {
                "paragraph": "This is a real story."
            }]
        },

        {
            "id": 50,
            "title": "Juggle Balls",
            "description": [{
                "paragraph": "Imagine life as a game in which you are juggling some five balls in the air. You name them – work, family, health, friends and spirit and you’re keeping all of these in the air. You will soon understand that work is a rubber ball. If you drop it, it will bounce back. But the other four balls – family, health, friends and spirit are made of glass. If you drop one of these, they will be irrevocably scuffed, marked, nicked, damaged or even shattered. They will never be the same. You must understand that and strive for balance in your life. How?"
            }, {
                "paragraph": ""
            }, {
                "paragraph": "Don’t undermine your worth by comparing yourself with others. It is because we are different that each of us is special. "
            }, {
                "paragraph": "Don’t set your goals by what other people deem important. Only you know what is best for you. "
            }, {
                "paragraph": "Don’t take for granted the things closest to your heart. Cling to them as you would your life, for without them, life is meaningless. "
            }, {
                "paragraph": "Don’t let your life slip through your fingers by living in the past or for the future. By living your life one day at a time, you live ALL the days of your life. "
            }, {
                "paragraph": "Don’t give up when you still have something to give. Nothing is really over until the moment you stop trying. "
            }, {
                "paragraph": "Don’t be afraid to admit that you are less than perfect. It is this fragile thread that binds us each together. "
            }, {
                "paragraph": "Don’t be afraid to encounter risks. It is by taking chances that we learn how to be brave. "
            }, {
                "paragraph": "Don’t shut love out of your life by saying it’s impossible to find. The quickest way to receive love is to give; the fastest way to lose love is to hold it too tightly; and the best way to keep love is to give it wings. "
            }, {
                "paragraph": "Don’t run through life so fast that you forget not only where you’ve been, but also where you are going. "
            }, {
                "paragraph": "Don’t forget that a person’s greatest emotional need is to feel appreciated. "
            }, {
                "paragraph": "Don’t be afraid to learn. Knowledge is weightless, a treasure you can always carry easily. "
            }, {
                "paragraph": "Don’t use time or words carelessly. Neither can be retrieved. Life is not a race, but a journey to be savored each step of the way."
            }, {
                "paragraph": "By Coca Cola CEO Brian Dyson "
            }]
        },

        {
            "id": 51,
            "title": "Never Quits",
            "description": [{
                "paragraph": "Abraham Lincoln never quits."
            }, {
                "paragraph": "Born into poverty, Lincoln was faced with defeat throughout his life. He lost eight elections, twice failed in business and suffered a nervous breakdown."
            }, {
                "paragraph": "He could have quit many times – but he didn’t and because he didn’t quit, he became one of the greatest presidents in the United States history."
            }, {
                "paragraph": "Here is a sketch of Lincoln’s road to the White House:"
            }, {
                "paragraph": "1816 His family was forced out of their home. He had to work to support them."
            }, {
                "paragraph": "1818 His mother died."
            }, {
                "paragraph": "1831 Failed in business."
            }, {
                "paragraph": "1832 Ran for state legislature – lost."
            }, {
                "paragraph": "1832 Also lost his job – wanted to go to law school but couldn’t get in."
            }, {
                "paragraph": "1833 Borrowed some money from a friend to begin a business and by the end of the year he was bankrupt. He spent the next 17 years of his life paying off this debt."
            }, {
                "paragraph": "1834 Ran for state legislature again – won."
            }, {
                "paragraph": "1835 Was engaged to be married, sweetheart died and his heart was broken."
            }, {
                "paragraph": "1836 Had a total nervous breakdown and was in bed for six months."
            }, {
                "paragraph": "1838 Sought to become speaker of the state legislature – defeated."
            }, {
                "paragraph": "1840 Sought to become elector – defeated."
            }, {
                "paragraph": "1843 Ran for Congress – lost."
            }, {
                "paragraph": "1846 Ran for Congress again – this time he won – went to Washington and did a good job."
            }, {
                "paragraph": "1848 Ran for re-election to Congress – lost."
            }, {
                "paragraph": "1849 Sought the job of land officer in his home state – rejected."
            }, {
                "paragraph": "1854 Ran for Senate of the United States – lost."
            }, {
                "paragraph": "1856 Sought the Vice-Presidential nomination at his party’s national convention – get less than 100 votes."
            }, {
                "paragraph": "1858 Ran for U.S. Senate again – again he lost."
            }, {
                "paragraph": "1860 Elected president of the United States."
            }]
        },

        {
            "id": 52,
            "title": "Believe in Yourself",
            "description": [{
                "paragraph": "There may be days when you get up in the morning and things aren’t the way you had hoped they would be."
            }, {
                "paragraph": "That’s when you have to tell yourself that things will get better. There are times when people disappoint you and let you down."
            }, {
                "paragraph": "But those are the times when you must remind yourself to trust your own judgments and opinions, to keep your life focused on believing in yourself."
            }, {
                "paragraph": "There will be challenges to face and changes to make in your life, and it is up to you to accept them."
            }, {
                "paragraph": "Constantly keep yourself headed in the right direction for you. It may not be easy at times, but in those times of struggle you will find a stronger sense of who you are."
            }, {
                "paragraph": "So when the days come that are filled with frustration and unexpected responsibilities, remember to believe in yourself and all you want your life to be."
            }, {
                "paragraph": "Because the challenges and changes will only help you to find the goals that you know are meant to come true for you."
            }, {
                "paragraph": "Keep Believing in Yourself!"
            }]
        },

        {
            "id": 53,
            "title": "To Let Go",
            "description": [{
                "paragraph": "To let go does not mean to stop caring, it means I can’t do it for someone else."
            }, {
                "paragraph": "To let go is not to cut myself off, it’s the realization that I can’t control another."
            }, {
                "paragraph": "To let go is not to enable, but to allow learning from natural consequences."
            }, {
                "paragraph": "To let go is to admit powerlessness, which means the outcome is not in my hands."
            }, {
                "paragraph": "To let go is not to try to change or blame another, it’s to make the most of myself."
            }, {
                "paragraph": "To let go is not to care for, but to care about."
            }, {
                "paragraph": "To let go is not to fix, but to be supportive."
            }, {
                "paragraph": "To let go is not to judge, but to allow another to be a human being."
            }, {
                "paragraph": "To let go is not to be in the middle arranging all the outcomes, but to allow others to affect their own destinies."
            }, {
                "paragraph": "To let go is not to be protective, it’s to permit another to face reality."
            }, {
                "paragraph": "To let go is not to criticize, or regulate anyone, but to try to become what I dream I can do."
            }, {
                "paragraph": "To let go is to fear less, and to love more."
            }]
        },

        {
            "id": 54,
            "title": "The pretty one, very inspiring",
            "description": [{
                "paragraph": "It had been a very long night. Our black cocker spaniel ‘Precious’ was having a difficult delivery. I lay on the floor beside her large four-foot square cage, watching her every movement. Watching and waiting, just in case I had to rush her to the veterinarian."
            }, {
                "paragraph": "After six hours the puppies started to appear. The first-born was black and white. The second and third puppies were tan and brown in color. The fourth and fifth were also spotted black and white. “One, two, three, four, five,” I counted to myself as I walked down the hallway to wake my wife, Judy, and tell her that everything was fine."
            }, {
                "paragraph": "As we walked back down the hallway and into the spare bedroom, I noticed a sixth puppy had been born and was now laying all by itself over to the side of the cage. I picked up the small puppy and laid it on top of the large pile of puppies, who were whining and trying to nurse on the mother. Precious immediately pushed the small puppy away from rest of the group. She refused to recognize it as a member of her family."
            }, {
                "paragraph": "“Something’s wrong,” said Judy."
            }, {
                "paragraph": "I reached over and picked up the puppy. My heart sank inside my chest when I saw the little puppy had a cleft lip and palate and could not close its little mouth. I decided right there and then that if there was any way to save this animal I was going to give it my best shot."
            }, {
                "paragraph": "I took the puppy to the vet and was told nothing could be done unless we were willing to spend about a thousand dollars to try and correct the defect. He told us that the puppy would die mainly because it could not suckle. After returning home, Judy and I decided that we could not afford to spend that kind of money without getting some type of assurance from the vet that the puppy had a chance to live. However, that did not stop me from purchasing a syringe and feeding the puppy by hand. Which I did every day and night, every two hours, for more than ten days. The little puppy survived and learned to eat on his own as long as it was soft canned food."
            }, {
                "paragraph": "The fifth week I placed an ad in the newspaper, and within a week we had people interested in all of the pups, except the one with the deformity. Late one afternoon I went to the store to pick up a few groceries. Upon returning I happened to see the old retired schoolteacher, who lived across the street from us, waving at me. She had read in the paper that we had puppies and was wondering if she might get one from us for her grandson and his family. I told her all the puppies had found homes, but I would keep my eyes open for anyone else who might have an available cocker spaniel. I also mentioned that if someone should change their mind, I would let her know. Within days, all but one of the puppies had been picked up by their new families. This left me with one brown and tan cocker as well as the smaller puppy with the cleft lip and palate."
            }, {
                "paragraph": "Two days passed without me hearing anything from the gentleman who had been promised the tan and brown pup. I telephoned the schoolteacher and told her I had one puppy left and that she was welcome to come and look at it. She advised me that she was going to pick up her grandson and would come over at about eight o’clock that evening."
            }, {
                "paragraph": "That night at around seven-thirty, Judy and I were eating supper when we heard a knock on the front door. When I opened the door, the man who had wanted the tan and brown pup was standing there. We walked inside, took care of the adoption details and I handed him the puppy. Judy and I did not know what we would do or say when the teacher showed up with her grandson. At exactly eight o’clock the doorbell rang. I opened the door, and there was the schoolteacher with her grandson standing behind her. I explained to her the man had come for the puppy after all, and there were no puppies left. “I’m sorry, Jeffery. They found homes for all the puppies,” she told her grandson."
            }, {
                "paragraph": "Just at that moment, the small puppy left in the bedroom began to yelp."
            }, {
                "paragraph": "“My puppy! My puppy!” yelled the little boy as he ran out from behind his grandmother."
            }, {
                "paragraph": "I just about fell over when I saw that the small child also had a cleft lip and palate. The boy ran past me as fast as he could, down the hallway to where the puppy was still yelping. When the three of us made it to the bedroom, the small boy was holding the puppy in his arms. He looked up at his grandmother and said, “Look, Grandma. They found homes for all the puppies except the pretty one, and he looks just like me.”"
            }, {
                "paragraph": "The schoolteacher turned to us, “Is this puppy available?”"
            }, {
                "paragraph": "“Yes,” I answered. “That puppy is available.”"
            }, {
                "paragraph": "The little boy, who was now hugging the puppy, chimed in, “My grandma told me these kind of puppies are real expensive and that I have to take real good care of it.”"
            }, {
                "paragraph": "The lady opened her purse, but I reached over and pushed her hand back down into her purse so that she would not pull her wallet out. “How much do you think this puppy is worth?” I asked the boy. “About a dollar?” “No. This puppy is very, very expensive,” he replied."
            }, {
                "paragraph": "“More than a dollar?” I asked."
            }, {
                "paragraph": "“I’m afraid so,” said his grandmother."
            }, {
                "paragraph": "The boy stood there pressing the small puppy against his cheek. “We could not possibly take less than two dollars for this puppy,” Judy said, squeezing my hand. “Like you said, it’s the pretty one.”"
            }, {
                "paragraph": "The schoolteacher took out two dollars and handed it to the young boy."
            }, {
                "paragraph": "“It’s your dog now, Jeffery. You pay the man.”"
            }, {
                "paragraph": "Still holding the puppy tightly, the boy proudly handed me the money. Any worries I’d had about the puppy’s future were gone."
            }, {
                "paragraph": "The image of the little boy and his matching pup stays with me still. I think it must be a wonderful feeling for any young person to look at themselves in the mirror and see nothing, except “the pretty one.” "
            }, {
                "paragraph": "By Roger Dean Kiser,  a love, hope, courage books writer."
            }]
        },

        {
            "id": 55,
            "title": "The greatest gift is Love",
            "description": [{
                "paragraph": "A woman came out of her house and saw 3 old men with long white beards sitting in her front yard. She did not recognize them."
            }, {
                "paragraph": "She said, “I don’t think I know you, but you must be hungry. Please come in and have something to eat.”"
            }, {
                "paragraph": "“Is the man of the house home?”, they asked."
            }, {
                "paragraph": "“No”, she said. “He’s out.”"
            }, {
                "paragraph": "“Then we cannot come in”, they replied. In the evening when her husband came home, she told him what had happened."
            }, {
                "paragraph": "“Go tell them I am home and invite them in!” The woman went out and invited the men in. “We do not go into a House together,” they replied."
            }, {
                "paragraph": "“Why is that?” she wanted to know. One of the old men explained: “His name is Wealth,” he said pointing to one of his friends, and said pointing to another one, “He is Success, and I am Love.” Then he added, “Now go in and discuss with your husband which one of us you want in your home.”"
            }, {
                "paragraph": "The woman went in and told her husband what was said. Her husband was overjoyed. “How nice!!”, he said. “Since that is the case, let us invite Wealth. Let him come and fill our home with wealth!”"
            }, {
                "paragraph": "His wife disagreed. “My dear, why don’t we invite Success?”"
            }, {
                "paragraph": "Their daughter-in-law was listening from the other corner of the house. She jumped in with her own suggestion: “Would it not be better to invite Love? Our home will then be filled with love!”"
            }, {
                "paragraph": "“Let us heed our daughter-in-law’s advice,” said the husband to his wife. “Go out and invite Love to be our guest.”"
            }, {
                "paragraph": "The woman went out and asked the 3 old men, “Which one of you is Love? Please come in and be our guest.” Love got up and started walking toward the house. The other 2 also got up and followed him. Surprised, the lady asked Wealth and Success: “I only invited Love, Why are you coming in?”"
            }, {
                "paragraph": "The old men replied together: “If you had invited Wealth or Success, the other two of us would’ve stayed out, but since you invited Love, wherever He goes, we go with him. Wherever there is Love, there is also Wealth and Success!”"
            }]
        },

        {
            "id": 56,
            "title": "The Elephant Rope",
            "description": [{
                "paragraph": "As a man was passing the elephants, he suddenly stopped, confused by the fact that these huge creatures were being held by only a small rope tied to their front leg. No chains, no cages. It was obvious that the elephants could, at anytime, break away from their bonds but for some reason, they did not."
            }, {
                "paragraph": "He saw a trainer nearby and asked why these animals just stood there and made no attempt to get away. “Well,” trainer said, “when they are very young and much smaller we use the same size rope to tie them and, at that age, it’s enough to hold them. As they grow up, they are conditioned to believe they cannot break away. They believe the rope can still hold them, so they never try to break free.”"
            }, {
                "paragraph": "The man was amazed. These animals could at any time break free from their bonds but because they believed they couldn’t, they were stuck right where they were."
            }, {
                "paragraph": "Like the elephants, how many of us go through life hanging onto a belief that we cannot do something, simply because we failed at it once before?"
            }, {
                "paragraph": "Failure is part of learning; we should never give up the struggle in life."
            }]
        },

        {
            "id": 57,
            "title": "You are unique!",
            "description": [{
                "paragraph": "Think what a remarkable, unduplicatable, and miraculous thing it is to be you! Of all the people who have come and gone on the earth, since the beginning of time, not ONE of them is like YOU!"
            }, {
                "paragraph": "No one who has ever lived or is to come has had your combination of abilities, talents, appearance, friends, acquaintances, burdens, sorrows and opportunities."
            }, {
                "paragraph": "No one’s hair grows exactly the way yours does. No one’s finger prints are like yours. No one has the same combination of secret inside jokes and family expressions that you know."
            }, {
                "paragraph": "The few people who laugh at all the same things you do, don’t sneeze the way you do. No one prays about exactly the same concerns as you do. No one is loved by the same combination of people that love you – NO ONE!"
            }, {
                "paragraph": "No one before, no one to come. YOU ARE ABSOLUTELY UNIQUE!"
            }, {
                "paragraph": "Enjoy that uniqueness. You do not have to pretend in order to seem more like someone else. You weren’t meant to be like someone else. You do not have to lie to conceal the parts of you that are not like what you see in anyone else."
            }, {
                "paragraph": "You were meant to be different. Nowhere ever in all of history will the same things be going on in anyone’s mind, soul and spirit as are going on in yours right now."
            }, {
                "paragraph": "If you did not exist, there would be a hole in creation, a gap in history, something missing from the plan for humankind."
            }, {
                "paragraph": "Treasure your uniqueness. It is a gift given only to you. Enjoy it and share it!"
            }, {
                "paragraph": "No one can reach out to others in the same way that you can. No one can speak your words. No one can convey your meanings. No one can comfort with your kind of comfort. No one can bring your kind of understanding to another person."
            }, {
                "paragraph": "No one can be cheerful and lighthearted and joyous in your way. No one can smile your smile. No one else can bring the whole unique impact of you to another human being."
            }, {
                "paragraph": "Share your uniqueness. Let it be free to flow out among your family and friends and people you meet in the rush and clutter of living wherever you are. That gift of yourself was given you to enjoy and share. Give yourself away!"
            }, {
                "paragraph": "See it! Receive it! Let it tickle you! Let it inform you and nudge you and inspire you! YOU ARE UNIQUE!"
            }]
        },

        {
            "id": 58,
            "title": "The lost wallet, a great love story!",
            "description": [{
                "paragraph": "As I walked home one freezing day, I stumbled on a wallet someone had lost in the street. I picked it up and looked inside to find some identification so I could call the owner. But the wallet contained only three dollars and a crumpled letter that looked as if it had been in there for years."
            }, {
                "paragraph": "The envelope was worn and the only thing that was legible on it was the return address. I started to open the letter, hoping to find some clue. Then I saw the dateline–1924. The letter had been written almost 60 years ago."
            }, {
                "paragraph": "It was written in a beautiful feminine handwriting on powder blue stationery with a little flower in the left-hand corner. It was a “Dear John” letter that told the recipient, whose name appeared to be Michael, that the writer could not see him anymore because her mother forbade it. Even so, she wrote that she would always love him."
            }, {
                "paragraph": "It was signed, Hannah."
            }, {
                "paragraph": "It was a beautiful letter, but there was no way except for the name Michael, that the owner could be identified. Maybe if I called information, the operator could find a phone listing for the address on the envelope."
            }, {
                "paragraph": "“Operator,” I began, “this is an unusual request. I’m trying to find the owner of a wallet that I found. Is there anyway you can tell me if there is a phone number for an address that was on an envelope in the wallet?”"
            }, {
                "paragraph": "She suggested I speak with her supervisor, who hesitated for a moment then said, “Well, there is a phone listing at that address, but I can’t give you the number.” She said, as a courtesy, she would call that number, explain my story and would ask them if they wanted her to connect me."
            }, {
                "paragraph": "I waited a few minutes and then she was back on the line. “I have a party who will speak with you.”"
            }, {
                "paragraph": "I asked the woman on the other end of the line if she knew anyone by the name of Hannah. She gasped, “Oh! We bought this house from a family who had a daughter named Hannah. But that was 30 years ago!”"
            }, {
                "paragraph": "“Would you know where that family could be located now?” I asked."
            }, {
                "paragraph": "“I remember that Hannah had to place her mother in a nursing home some years ago,” the woman said. “Maybe if you got in touch with them they might be able to track down the daughter.”"
            }, {
                "paragraph": "She gave me the name of the nursing home and I called the number. They told me the old lady had passed away some years ago but they did have a phone number for where they thought the daughter might be living."
            }, {
                "paragraph": "I thanked them and phoned. The woman who answered explained that Hannah herself was now living in a nursing home."
            }, {
                "paragraph": "This whole thing was stupid, I thought to myself. Why was I making such a big deal over finding the owner of a wallet that had only three dollars and a letter that was almost 60 years old?"
            }, {
                "paragraph": "Nevertheless, I called the nursing home in which Hannah was supposed to be living and the man who answered the phone told me, “Yes, Hannah is staying with us.”"
            }, {
                "paragraph": "Even though it was already 10 p.m., I asked if I could come by to see her. “Well,” he said hesitatingly, “if you want to take a chance, she might be in the day room watching television.”"
            }, {
                "paragraph": "I thanked him and drove over to the nursing home. The night nurse and a guard greeted me at the door. We went up to the third floor of the large building. In the day room, the nurse introduced me to Hannah."
            }, {
                "paragraph": "She was a sweet, silver-haired oldtimer with a warm smile and a twinkle in her eye. I told her about finding the wallet and showed her the letter. The second she saw the powder blue envelope with that little flower on the left, she took a deep breath and said, “Young man, this letter was the last contact I ever had with Michael.”"
            }, {
                "paragraph": "She looked away for a moment deep in thought and then said softly, “I loved him very much. But I was only 16 at the time and my mother felt I was too young. Oh, he was so handsome. He looked like Sean Connery, the actor.”"
            }, {
                "paragraph": "“Yes,” she continued. “Michael Goldstein was a wonderful person. If you should find him, tell him I think of him often. And,” she hesitated for a moment, almost biting her lip, “tell him I still love him. You know,” she said smiling as tears began to well up in her eyes, “I never did marry. I guess no one ever matched up to Michael…”"
            }, {
                "paragraph": "I thanked Hannah and said goodbye. I took the elevator to the first floor and as I stood by the door, the guard there asked, “Was the old lady able to help you?”"
            }, {
                "paragraph": "I told him she had given me a lead. “At least I have a last name. But I think I’ll let it go for a while. I spent almost the whole day trying to find the owner of this wallet.”"
            }, {
                "paragraph": "I had taken out the wallet, which was a simple brown leather case with red lacing on the side. When the guard saw it, he said, “Hey, wait a minute! That’s Mr. Goldstein’s wallet. I’d know it anywhere with that bright red lacing. He’s always losing that wallet. I must have found it in the halls at least three times.”"
            }, {
                "paragraph": "“Who’s Mr. Goldstein?” I asked as my hand began to shake."
            }, {
                "paragraph": "“He’s one of the oldtimers on the 8th floor. That’s Mike Goldstein’s wallet for sure. He must have lost it on one of his walks.” I thanked the guard and quickly ran back to the nurse’s office. I told her what the guard had said. We went back to the elevator and got on. I prayed that Mr. Goldstein would be up."
            }, {
                "paragraph": "On the eighth floor, the floor nurse said, “I think he’s still in the day room. He likes to read at night. He’s a darling old man.”"
            }, {
                "paragraph": "We went to the only room that had any lights on and there was a man reading a book. The nurse went over to him and asked if he had lost his wallet. Mr. Goldstein looked up with surprise, put his hand in his back pocket and said, “Oh, it is missing!”"
            }, {
                "paragraph": "“This kind gentleman found a wallet and we wondered if it could be yours?”"
            }, {
                "paragraph": "I handed Mr. Goldstein the wallet and the second he saw it, he smiled with relief and said, “Yes, that’s it! It must have dropped out of my pocket this afternoon. I want to give you a reward.”"
            }, {
                "paragraph": "“No, thank you,” I said. “But I have to tell you something. I read the letter in the hope of finding out who owned the wallet.”"
            }, {
                "paragraph": "The smile on his face suddenly disappeared. “You read that letter?”"
            }, {
                "paragraph": "“Not only did I read it, I think I know where Hannah is.”"
            }, {
                "paragraph": "He suddenly grew pale. “Hannah? You know where she is? How is she? Is she still as pretty as she was? Please, please tell me,” he begged."
            }, {
                "paragraph": "“She’s fine…just as pretty as when you knew her.” I said softly."
            }, {
                "paragraph": "The old man smiled with anticipation and asked, “Could you tell me where she is? I want to call her tomorrow.” He grabbed my hand and said, “You know something, Mister? I was so in love with that girl that when that letter came, my life literally ended. I never married. I guess I’ve always loved her.”"
            }, {
                "paragraph": "“Mr. Goldstein,” I said, “Come with me.”"
            }, {
                "paragraph": "We took the elevator down to the third floor. The hallways were darkened and only one or two little night-lights lit our way to the day room where Hannah was sitting alone watching the television. The nurse walked over to her."
            }, {
                "paragraph": "“Hannah,” she said softly, pointing to Michael, who was waiting with me in the doorway. “Do you know this man?”"
            }, {
                "paragraph": "She adjusted her glasses, looked for a moment, but didn’t say a word. Michael said softly, almost in a whisper, “Hannah, it’s Michael. Do you remember me?”"
            }, {
                "paragraph": "She gasped, “Michael! I don’t believe it! Michael! It’s you! My Michael!” He walked slowly towards her and they embraced. The nurse and I left with tears streaming down our faces."
            }, {
                "paragraph": "“See,” I said. “See how the Good Lord works! If it’s meant to be, it will be.”"
            }, {
                "paragraph": "About three weeks later I got a call at my office from the nursing home. “Can you break away on Sunday to attend a wedding? Michael and Hannah are going to tie the knot!”"
            }, {
                "paragraph": "It was a beautiful wedding with all the people at the nursing home dressed up to join in the celebration. Hannah wore a light beige dress and looked beautiful. Michael wore a dark blue suit and stood tall. They made me their best man."
            }, {
                "paragraph": "The hospital gave them their own room and if you ever wanted to see a 76-year-old bride and a 79-year-old groom acting like two teenagers, you had to see this couple."
            }, {
                "paragraph": "A perfect ending for a love affair that had lasted nearly 60 years."
            }]
        },

        {
            "id": 59,
            "title": "Success depends upon maturity!",
            "description": [{
                "paragraph": "Maturity is many things. It is the ability to base a judgment on the big picture, the long haul."
            }, {
                "paragraph": "It means being able to resist the urge for immediate gratification and opt for the course of action that will pay off later."
            }, {
                "paragraph": "One of the characteristics of the young is “I want it now.”"
            }, {
                "paragraph": "Grown-up people can wait."
            }, {
                "paragraph": "Maturity is perseverance–the ability to sweat out a project or a situation, in spite of heavy opposition and discouraging setbacks, and stick with it until it is finished."
            }, {
                "paragraph": "The adult who is constantly changing friends and changing mates is immature. He/she cannot stick it out because he/she has not grown up."
            }, {
                "paragraph": "Maturity is the ability to control anger and settle differences without violence or destruction. The mature person can face unpleasantness, frustration, discomfort and defeat without collapsing or complaining. He/she knows he cannot have everything his/her own way every time. He/she is able to defer to circumstances, to other people-and to time. He/she knows when to compromise and is not too proud to do so."
            }, {
                "paragraph": "Maturity is humility. It is being big enough to say, “I was wrong.” And, when he/she is right, the mature person need not experience the satisfaction of saying, “I told you so.”"
            }, {
                "paragraph": "Maturity is the ability to live up to your responsibilities, and this means being dependable. It means keeping your word. Dependability is the hallmark of integrity. Do you mean what you say-and do you say what you mean? Unfortunately, the world is filled with people who cannot be counted on. When you need them most, they are among the missing. They never seem to come through in the clutches. They break promises and substitute alibis for performance. They show up late or not at all. They are confused and disorganized. Their lives are a chaotic maze of broken promises, former friends, unfinished business and good intentions that somehow never materialize. They are always a day late and a dollar short."
            }, {
                "paragraph": "Maturity is the ability to make a decision and stand by it. Immature people spend their lives exploring endless possibilities and then doing nothing. Action requires courage. Without courage, little is accomplished."
            }, {
                "paragraph": "Maturity is the ability to harness your abilities and your energies and do more than is expected. The mature person refuses to settle for mediocrity. He/she would rather aim high and miss the mark than low-and make it."
            }, {
                "paragraph": "Maturity is the art of living in peace with that which cannot be changed, the courage to change that which should be changed, no matter what it takes, and the wisdom to know the difference."
            }, {
                "paragraph": "By Ann landers"
            }]
        },


        {
            "id": 60,
            "title": "Learn from Mistakes",
            "description": [{
                "paragraph": "Thomas Edison tried two thousand different materials in search of a filament for the light bulb. When none worked satisfactorily, his assistant complained, “All our work is in vain. We have learned nothing.”"
            }, {
                "paragraph": "Edison replied very confidently, “Oh, we have come a long way and we have learned a lot. We know that there are two thousand elements which we cannot use to make a good light bulb.”"
            }]
        },
        {
            "id": 61,
            "title": "Bird And Shit Theory",
            "description": [{
                "paragraph": "A little bird was flying south for the winter. It was so cold that the bird froze and fell to the ground in a large field. While it was lying there, a cow came by and dropped a load of hot, steaming dung on it. As the frozen bird lay there in the pile of shit, it began to realize how warm it was. The dung was actually thawing him out! He lay there all warm and happy and soon began to sing for joy. A passing cat heard the bird singing and came to investigate. Following the sound, the cat discovered the bird under the pile of cow dung. The cat promptly dug the bird out, killed him and ate him."
            }, {
                "paragraph": "Moral: Not everyone who drops shit on you is your enemy. Not everyone who pulls you out of shit is your friend. And when you're warm and happy in your pile of shit, keep your mouth shut!"
            }]
        },
        {
            "id": 62,
            "title": "Power of 1% Improvement",
            "description": [{
                "paragraph": "Two young men were accused of stealing a cow of a farmer. Both men pleaded innocence with the jury. A Trial by Combat was delivered stating the one who could carry a cow that of similar size of the stolen cow and walk a mile will be declared innocent and the another would be beheaded. As per the village rules, the D-day was fixed exactly 1 year from then until which the two accused will be ostracized by the village."
            }, {
                "paragraph": "The two men left village, one with a cow weighing 150kg and another carried a calf. After a year both appeared for justice on the judgement day. The first man said, I tried lifting the cow all this year with the sincerest of efforts. I had nutrient rich food and starved the cow yet it's too heavy to lift let alone walk a mile carrying it. We both will die"
            }, {
                "paragraph": "The second who left the village carrying the calf made it a habit to carry the calf wherever he roams every single day all this year. The calf grew to a heavy cow on his shoulder. This man had no trouble walking a mile with the cow on his shoulder. The 1% improvement everyday saved his life."
            }]
        },
        {
            "id": 63,
            "title": "Whose mistake",
            "description": [{
                "paragraph": "Once there lived a noble Guru known for his wisdom and compassion. One of his disciple started complaining that his Guru did not teach him anything valuable despite spending 20 years at his service. Hearing his complaint, the Guru handed him the responsibility of bringing lunch for Gurukul(school) everyday from neighborhood."
            }, {
                "paragraph": "The disciple had to travel on foot few miles, carry the food to Gurukul and serve food to his Guru. While getting food from neighborhood he befriended a caged parrot to whom he complaint his Guru's lack of willingness to teach him. The parrot replied, Oh my friend! I have heard great things about the noble Guru. Are you sure you were mindful in the process of learning?. Frustrated disciple shouted, After all you are a parrot, you don't question my intelligence. Disappointed with his arrogance, the parrot put an end to the conversation."
            }, {
                "paragraph": 'Few days later, when the disciple came to get lunch, the gloomy parrot told him, "My master has decided to sacrifice me after two days" and requested him, "Please ask the Guru a solution to save my life". The lethargic disciple said, "He has not taught me anything after spending 20 years with him. How would he be helpful to you?". But as the parrot pleaded he decided to discuss with his Guru.'
            }, {
                "paragraph": 'The next day, the curious parrot asked him for the solution. The disciple said, "I told your misery to the Guru. When I asked for a solution, the Guru simply lied on the floor motionless for a while and went away. I am sure he is not willing to teach anything. I am sorry for your fate".'
            }, {
                "paragraph": "The next day, the disciple saw an empty cage. He felt bad for his friend's death. He met his friend's master to confirm the death. The angry master yelled, 'That was a wicked creature. When I went to open the cage, it was lying motionless as dead. Shocked, I opened the cage and took it out for examination. Suddenly, the parrot flew away and escaped'."
            }, {
                "paragraph": "Hearing this, the disciple realized the parrot has learnt from his Guru without even meeting him once but he had wasted 20 years. Now he found where the lack of willingness actually was."
            }]
        },
        {
            "id": 64,
            "title": "Boiling Frog Syndrome",
            "description": [{
                "paragraph": "Human Beings and frogs are the two creatures in nature who have tremendous power to adjust. Put a frog in a vessel of water and start heating the water. As the temperature of the water rises, the frog is able to adjust its body temperature accordingly. The frog keeps on adjusting with increase in temperature. Just when the water is about to reach boiling point, the frog is not able to adjust anymore. At that point the frog decides to jump out. The frog tries to jump but is unable to do so, because it lost all its strength in adjusting with the water temperature. Very soon the frog dies. What killed the frog? Many of us would say the boiling water. But the truth is what killed the frog was its own inability to decide when it had to jump out."
            }, {
                "paragraph": "We all need to adjust with people and situations, but we need to be sure when we need to adjust and when we need to face. There are times when we need to face the situation and take the appropriate action. If we allow people to exploit us physically, emotionally or financially, they will continue to do so. We have to decide when to jump. Let us jump while we still have the strength."
            }]
        },
        {
            "id": 65,
            "title": "Dinner with a Father",
            "description": [{
                    "paragraph": "A son took his old father to a restaurant for an evening dinner.  Father being very old and weak, while eating, dropped food on his shirt and trousers.  Other diners watched him in disgust while his son was calm."
				}, {
                    "paragraph": "After he finished eating, his son who was not at all embarrassed, quietly took him to the wash room, wiped the food particles, removed the stains, combed his hair and fitted his spectacles firmly.  When they came out, the entire restaurant was watching them in dead silence, not able to grasp how someone could embarrass themselves publicly like that.  The son settled the bill and started walking out with his father."
				}, {
                    "paragraph": "At that time, an old man amongst the diners called out to the son and asked him, “Don’t you think you have left something behind?”."
				}, {
                    "paragraph": "The son replied, “No sir, I haven’t”."
				}, {
                    "paragraph": "The old man retorted, “Yes, you have!  You left a lesson for every son and hope for every father”."
				}, {
                    "paragraph": "The restaurant went silent."
				}, {
                    "paragraph": "Moral: To care for those who once cared for us is one of the highest honors.   We all know, how our parents cared for us for every little things.  Love them, respect them, and care for them."
				}

			]
		},

        {
            "id": 66,
            "title": "Little Boy’s Meeting with God",
            "description": [{
                    "paragraph": "There once was a little boy who wanted to meet God. He knew it was a long trip to where God lived, so he packed his suitcase with Twinkies and a six-pack of root beer and started his journey. When he had gone about three blocks, he met an old woman. She was sitting in the park just staring at some pigeons."
				}, {
                    "paragraph": "The boy sat down next to her and opened his suitcase. He was about to take a drink from his root beer when he noticed that the old lady looked hungry, so he offered her a Twinkie. She gratefully accepted it and smiled at him. Her smile was so pretty that the boy wanted to see it again, so he offered her a root beer. Once again she smiled at him. The boy was delighted! They sat there all afternoon eating and smiling, but they never said a word."
				}, {
                    "paragraph": "As it grew dark, the boy realized how tired he was, and he got up to leave but before he had gone more than a few steps, he turned around, ran back to the old woman and gave her a hug. She gave him her biggest smile ever. When the boy opened the door to his own house a short time later, his mother was surprised by the look of joy on his face. She asked him, “What did you do today that made you so happy?” He replied, “I had lunch with God.” But, before his mother could respond, he added, “You know what? She’s got the most beautiful smile I’ve ever seen!”"
				}, {
                    "paragraph": "Meanwhile, the old woman, also radiant with joy, returned to her home. Her son was stunned by the look of peace on her face and he asked, “Mother, what did you do today that made you so happy?” She replied, “I ate Twinkies in the park with God.” But, before her son responded, she added, “You know, he’s much younger than I expected.”"
				}, {
                    "paragraph": "Moral: God is everywhere.  We just need to share our happiness and make others smile to feel him."
				}

			]
		},

        {
            "id": 67,
            "title": "Smartest Man in the World",
            "description": [{
                    "paragraph": "A doctor, a lawyer, a little boy and a priest were out for a Sunday afternoon flight on a small private plane. Suddenly, the plane developed engine trouble. In spite of the best efforts of the pilot, the plane started to go down. Finally, the pilot grabbed a parachute and yelled to the passengers that they better jump, and he himself bailed out."
				}, {
                    "paragraph": "Unfortunately, there were only three parachutes remaining."
				}, {
                    "paragraph": "The doctor grabbed one and said “I’m a doctor, I save lives, so I must live,” and jumped out."
				}, {
                    "paragraph": "The lawyer then said, “I’m a lawyer and lawyers are the smartest people in the world. I deserve to live.” He also grabbed a parachute and jumped."
				}, {
                    "paragraph": "The priest looked at the little boy and said, “My son, I’ve lived a long and full life. You are young and have your whole life ahead of you. Take the last parachute and live in peace.”"
				}, {
                    "paragraph": "The little boy handed the parachute back to the priest and said, “Not to worry Father. The smartest man in the world just took off with my back pack.”"
				}, {
                    "paragraph": "Moral: Your job doesn’t always define you, but being a Good Human being Does."
				}

			]
		},

        {
            "id": 68,
            "title": "The False Human Belief",
            "description": [{
                    "paragraph": "As a man was passing the elephants, he suddenly stopped, confused by the fact that these huge creatures were being held by only a small rope tied to their front leg. No chains, no cages. It was obvious that the elephants could, at anytime can break away from their bonds but for some reason, they did not"
				}, {
                    "paragraph": "He saw a trainer nearby and asked why these animals just stood there and made no attempt to get away. “Well,” trainer said, “when they are very young and much smaller we use the same size rope to tie them and, at that age, it’s enough to hold them. As they grow up, they are conditioned to believe they cannot break away. They believe the rope can still hold them, so they never try to break free.”"
				}, {
                    "paragraph": "The man was amazed. These animals could at any time break free from their bonds but because they believed they couldn’t, they were stuck right where they were."
				}, {
                    "paragraph": "Like the elephants, how many of us go through life hanging onto a belief that we cannot do something, simply because we failed at it once before?"
				}, {
                    "paragraph": "Moral: Failure is a part of learning. We should never give up the struggle in life. You Fail not because you are destined to fail, but because there are lessons which you need to learn as you move on with your life."
				}

			]
		},

        {
            "id": 69,
            "title": "The Praying Hands",
            "description": [{
                "paragraph": "Back in the fifteenth century, in a tiny village near Nuremberg, lived a family with eighteen children. Eighteen! In order merely to keep food on the table for this mob, the father and head of the household, a goldsmith by profession, worked almost eighteen hours a day at his trade and any other paying chore he could find in the neighborhood. Despite their seemingly hopeless condition, two of Albrecht Durer the Elder’s children had a dream. They both wanted to pursue their talent for art, but they knew full well that their father would never be financially able to send either of them to Nuremberg to study at the Academy."
			}, {
                "paragraph": "After many long discussions at night in their crowded bed, the two boys finally worked out a pact. They would toss a coin. The loser would go down into the nearby mines and, with his earnings, support his brother while he attended the academy. Then, when that brother who won the toss completed his studies, in four years, he would support the other brother at the academy, either with sales of his artwork or, if necessary, also by laboring in the mines."
			}, {
                "paragraph": "They tossed a coin on a Sunday morning after church. Albrecht Durer won the toss and went off to Nuremberg. Albert went down into the dangerous mines and, for the next four years, financed his brother, whose work at the academy was almost an immediate sensation. Albrecht’s etchings, his woodcuts, and his oils were far better than those of most of his professors, and by the time he graduated, he was beginning to earn considerable fees for his commissioned works."
			}, {
                "paragraph": "When the young artist returned to his village, the Durer family held a festive dinner on their lawn to celebrate Albrecht’s triumphant homecoming. After a long and memorable meal, punctuated with music and laughter, Albrecht rose from his honored position at the head of the table to drink a toast to his beloved brother for the years of sacrifice that had enabled Albrecht to fulfill his ambition. His closing words were, “And now, Albert, blessed brother of mine, now it is your turn. Now you can go to Nuremberg to pursue your dream, and I will take care of you.”"
			}, {
                "paragraph": "All heads turned in eager expectation to the far end of the table where Albert sat, tears streaming down his pale face, shaking his lowered head from side to side while he sobbed and repeated, over and over, “No …no …no …no.”"
			}, {
                "paragraph": "Finally, Albert rose and wiped the tears from his cheeks. He glanced down the long table at the faces he loved, and then, holding his hands close to his right cheek, he said softly, “No, brother. I cannot go to Nuremberg. It is too late for me. Look … look what four years in the mines have done to my hands! The bones in every finger have been smashed at least once, and lately I have been suffering from arthritis so badly in my right hand that I cannot even hold a glass to return your toast, much less make delicate lines on parchment or canvas with a pen or a brush. No, brother … for me it is too late.”"
			}, {
                "paragraph": "More than 450 years have passed. By now, Albrecht Durer’s hundreds of masterful portraits, pen and silver-point sketches, watercolors, charcoals, woodcuts, and copper engravings hang in every great museum in the world, but the odds are great that you, like most people, are familiar with only one of Albrecht Durer’s works. More than merely being familiar with it, you very well may have a reproduction hanging in your home or office."
			}, {
                "paragraph": "One day, to pay homage to Albert for all that he had sacrificed, Albrecht Durer painstakingly drew his brother’s abused hands with palms together and thin fingers stretched skyward. He called his powerful drawing simply “Hands,” but the entire world almost immediately opened their hearts to his great masterpiece and renamed his tribute of love “The Praying Hands.”"
			}, {
                "paragraph": "Moral: The next time you see a copy of that touching creation, take a second look. Let it be your reminder, if you still need one, that no one – no one – ever makes it alone!"
			}]
		},

        {
            "id": 70,
            "title": "Keep Your Dream",
            "description": [{
                "paragraph": "I have a friend named Monty Roberts who owns a horse ranch in San Isidro. He has let me use his house to put on fund-raising events to raise money for youth at risk programs."
			}, {
                "paragraph": "The last time I was there he introduced me by saying, “I want to tell you why I let Jack use my horse. It all goes back to a story about a young man who was the son of an itinerant horse trainer who would go from stable to stable, race track to race track, farm to farm and ranch to ranch, training horses. As a result, the boy’s high school career was continually interrupted. When he was a senior, he was asked to write a paper about what he wanted to be and do when he grew up."
			}, {
                "paragraph": "“That night he wrote a seven-page paper describing his goal of someday owning a horse ranch. He wrote about his dream in great detail and he even drew a diagram of a 200-acre ranch, showing the location of all the buildings, the stables and the track. Then he drew a detailed floor plan for a 4,000-square-foot house that would sit on a 200-acre dream ranch."
			}, {
                "paragraph": "“He put a great deal of his heart into the project and the next day he handed it in to his teacher. Two days later he received his paper back. On the front page was a large red F with a note that read, `See me after class.’"
			}, {
                "paragraph": "“The boy with the dream went to see the teacher after class and asked, `Why did I receive an F?’"
			}, {
                "paragraph": "“The teacher said, `This is an unrealistic dream for a young boy like you. You have no money. You come from an itinerant family. You have no resources. Owning a horse ranch requires a lot of money. You have to buy the land. You have to pay for the original breeding stock and later you’ll have to pay large stud fees. There’s no way you could ever do it.’ Then the teacher added, `If you will rewrite this paper with a more realistic goal, I will reconsider your grade.’"
			}, {
                "paragraph": "“The boy went home and thought about it long and hard. He asked his father what he should do. His father said, `Look, son, you have to make up your own mind on this. However, I think it is a very important decision for you.’ “Finally, after sitting with it for a week, the boy turned in the same paper, making no changes at all."
			}, {
                "paragraph": "He stated, “You can keep the F and I’ll keep my dream.”"
			}, {
                "paragraph": "Monty then turned to the assembled group and said, “I tell you this story because you are sitting in my 4,000-square-foot house in the middle of my 200-acre horse ranch. I still have that school paper framed over the fireplace.” He added, “The best part of the story is that two summers ago that same schoolteacher brought 30 kids to camp out on my ranch for a week.” When the teacher was leaving, he said, “Look, Monty, I can tell you this now. When I was your teacher, I was something of a dream stealer. During those years I stole a lot of kids’ dreams. Fortunately you had enough gumption not to give up on yours.”"
			}, {
                "paragraph": "Moral: Don’t let anyone steal your dreams. Follow your heart, no matter what.   No Dream is too big or too small when one works hard to live it.  One should always try making dreams come true no matter what."
			}]
		},

        {
            "id": 71,
            "title": "Baby Camel and Mother",
            "description": [{
                "paragraph": "A mother and a baby camel were lying around, and suddenly the baby camel asked, “mother, may I ask you some questions? Mother said, “Sure! Why son, is there something bothering you? Baby said, “Why do camels have humps?” Mother said “Well son, we are desert animals, we need the humps to store water and we are known to survive without water”. Baby said, “Okay, then why are our legs long and our feet rounded?” Mother said, “Son, obviously they are meant for walking in the desert. You know with these legs I can move around the desert better than anyone does!” Baby said, “Okay, then why are our eyelashes long? Sometimes it bothers my sight”. Mother with pride said, “My son, those long thick eyelashes are your protective cover. They help to protect your eyes from the desert sand and wind”."
			}, {
                "paragraph": "Baby after thinking said, “I see. So the hump is to store water when we are in the desert, the legs are for walking through the desert and these eye lashes protect my eyes from the desert then what in god’s name are we doing here in the Zoo!?”"
			}, {
                "paragraph": "Moral: Skills, knowledge, abilities and experiences are only useful if you are at the right place."
			}]
		}, {
            "id": 72,
            "title": "Boy’s Weakness",
            "description": [{
                "paragraph": "A 10-year-old boy decided to study judo despite the fact that he had lost his left arm in a devastating car accident."
			}, {
                "paragraph": "The boy began lessons with an old Japanese judo master. The boy was doing well, so he couldn’t understand why, after three months of training the master had taught him only one move. “Sensei,”(Teacher in Japanese) the boy finally said, “Shouldn’t I be learning more moves?” “This is the only move you know, but this is the only move you’ll ever need to know,” the sensei replied"
			}, {
                "paragraph": "Not quite understanding, but believing in his teacher, the boy kept training. Several months later, the sensei took the boy to his first tournament. Surprising himself, the boy easily won his first two matches. The third match proved to be more difficult, but after some time, his opponent became impatient and charged; the boy deftly used his one move to win the match. Still amazed by his success, the boy was now in the finals."
			}, {
                "paragraph": "This time, his opponent was bigger, stronger, and more experienced. For a while, the boy appeared to be overmatched. Concerned that the boy might get hurt, the referee called a time-out. He was about to stop the match when the sensei intervened. “No,” the sensei insisted, “Let him continue.” Soon after the match resumed, his opponent made a critical mistake: he dropped his guard. Instantly, the boy used his move to pin him. The boy had won the match and the tournament."
			}, {
                "paragraph": "He was the champion. On the way home, the boy and sensei reviewed every move in each and every match. Then the boy summoned the courage to ask what was really on his mind."
			}, {
                "paragraph": "“Sensei, how did I win the tournament with only one move?”"
			}, {
                "paragraph": "“You won for two reasons,” the sensei answered. “First, you’ve almost mastered one of the most difficult throws in all of judo. And second, the only known defense for that move is for your opponent to grab your left arm.”"
			}, {
                "paragraph": "The boy’s biggest weakness had become his biggest strength."
			}, {
                "paragraph": "Moral: Sometimes we feel that we have certain weaknesses and we blame God, the circumstances or ourselves for it but we never know that our weaknesses can become our strengths one day. Each of us is special and important, so never think you have any weakness, never think of pride or pain, just live your life to its fullest and extract the best out of it!”"
			}]
		},

        {
            "id": 73,
            "title": "Appreciation of Hard Work",
            "description": [{
                    "paragraph": "One young academically excellent person went to apply for a managerial position in a big company. He passed the first interview, the director did the last interview, made the last decision. The director discovered from the CV that the youth’s academic achievements were excellent all the way, from the secondary school until the postgraduate research, Never had a year when he did not score."
				}, {
                    "paragraph": "The director asked, “Did you obtain any scholarships in school?” The youth answered “none”."
				}, {
                    "paragraph": "The director asked,  “Was it your father who paid for your school fees?” The youth answered, “My father passed away when I was one year old, it was my mother who paid for my school fees”."
				}, {
                    "paragraph": "The director asked,  “Where did your mother work?” The youth answered, “My mother worked as clothes cleaner. The director requested the youth to show his hands. The youth showed a pair of hands that were smooth and perfect”."
				}, {
                    "paragraph": "The director asked,  “Have you ever helped your mother wash the clothes before?” The youth answered, “Never, my mother always wanted me to study and read more books. Furthermore, my mother can wash clothes faster than me”."
				}, {
                    "paragraph": "The director said, “I have a request. When you go back today, go and clean your mother’s hands, and then see me tomorrow morning”."
				}, {
                    "paragraph": "The youth felt that his chance of landing the job was high. When he went back, he happily requested his mother to let him clean her hands. His mother felt strange, happy but with mixed feelings, she showed her hands to the kid. The youth cleaned his mother’s hands slowly. His tear fell as he did that. It was the first time he noticed that his mother’s hands were so wrinkled, and there were so many bruises in her hands. Some bruises were so painful that his mother shivered when they were cleaned with water."
				}, {
                    "paragraph": "This was the first time the youth realized that it was this pair of hands that washed the clothes everyday to enable him to pay the school fee. The bruises in the mother’s hands were the price that the mother had to pay for his graduation, academic excellence and his future. After finishing the cleaning of his mother’s hands, the youth quietly washed all the remaining clothes for his mother. That night, mother and son talked for a very long time. Next morning, the youth went to the director’s office."
				}, {
                    "paragraph": "The Director noticed the tears in the youth’s eyes, asked:  “Can you tell me what have you done and learned yesterday in your house?” The youth answered,  “I cleaned my mother’s hand, and also finished cleaning all the remaining clothes”."
				}, {
                    "paragraph": "The Director asked,  “please tell me your feelings”. The youth said, “Number 1, I know now what is appreciation. Without my mother, there would not the successful me today. Number 2, By working together and helping my mother, only I now realize how difficult and tough it is to get something done. Number 3, I have come to appreciate the importance and value of family relationship”."
				}, {
                    "paragraph": "The director said,  “This is what I am looking for to be my manager. I want to recruit a person who can appreciate the help of others, a person who knows the sufferings of others to get things done, and a person who would not put money as his only goal in life. You are hired”. Later on, this young person worked very hard, and received the respect of his subordinates. Every employee worked diligently and as a team. The company’s performance improved tremendously."
				}, {
                    "paragraph": "Moral: If one doesn’t understand and experience the difficulty it takes to earn the comfort provided by their loved ones, than they will never value it.  The most important thing is to experience the difficulty and learn to value hard work behind all the given comfort."
				}

			]
		},

        {
            "id": 74,
            "title": "The Giving Tree",
            "description": [{
                "paragraph": "Once upon a time, there lived a big mango tree. A little boy loved to come and play around it everyday. He climbed to the tree top, ate the mangoes, took a nap under the shadow… He loved the tree and the tree loved to play with him. Time went by, The little boy grew, and he no longer played around the tree."
			}, {
                "paragraph": "One day, the boy came back to the tree with a sad look on his face. “Come and play with me,” the tree asked the boy. “I am no longer a kid, I don’t play around trees anymore.” The boy replied, “I want toys. I need money to buy them.” “Sorry, I don’t have money… but you can pick all my mangoes and sell them so you will have money.” The boy was so excited. He picked all the mangoes on the tree and left happily. The boy didn’t come back. The tree was sad."
			}, {
                "paragraph": "One day, the boy grown into a man returned. The tree was so excited. “Come and play with me,” the tree said. “I don’t have time to play. I have to work for my family. We need a house for shelter. Can you help me?” “Sorry, I don’t have a house, but you can chop off my branches to build your house.” So the man cut all the branches off the tree and left happily. The tree was glad to see him happy but the boy didn’t come back afterward. The tree was again lonely and sad."
			}, {
                "paragraph": "One hot summer day, the man returned and the tree was delighted. “Come and play with me!” The tree said. “I am sad and getting old. I want to go sailing to relax myself. Can you give me a boat?” “Use my trunk to build your boat. You can sail far away and be happy.” So the man cut the tree trunk to make a boat. He went sailing and didn’t come back for a long time."
			}, {
                "paragraph": "Finally, the man returned after he had been gone for so many years. “Sorry, my boy, but I don’t have anything for you anymore. No more mangoes to give you.” The tree said. “I don’t have teeth to bite,” the man replied. “No more trunk for you to climb on.” “I am too old for that now,” the man said."
			}, {
                "paragraph": "“I really can’t give you anything, the only thing left is my dying roots,” the tree said with sadness. “I don’t need much now, just a place to rest. I am tired after all these years,” the man replied. “Good! Old tree roots are the best place to lean on and rest. Come sit down with me and rest.” The boy sat down and the tree was glad and smiled."
			}, {
                "paragraph": "Moral: The tree in the story represents our parents. When we are young, we love to play with them. When we grow up, we leave them and only come back when we need help. Parents sacrifice their lives for us. Never Forget their sacrifices. Give them Love and Care before its too late."
			}]
		},

        {
            "id": 75,
            "title": "Who is Happy? The Peacock and The Crow",
            "description": [{
                "paragraph": "A crow lived in the forest and was absolutely satisfied in life. But one day he saw a swan. “This swan is so white,” he thought, “and I am so black. This swan must be the happiest bird in the world.”"
			}, {
                "paragraph": "He expressed his thoughts to the swan. “Actually,” the swan replied, “I was feeling that I was the happiest bird around until I saw a parrot, which has two colors. I now think the parrot is the happiest bird in creation.” The crow then approached the parrot. The parrot explained, “I lived a very happy life until I saw a peacock. I have only two colors, but the peacock has multiple colors.”"
			}, {
                "paragraph": "The crow then visited a peacock in the zoo and saw that hundreds of people had gathered to see him. After the people had left, the crow approached the peacock. “Dear peacock,” the crow said, “you are so beautiful. Every day thousands of people come to see you. When people see me, they immediately shoo me away. I think you are the happiest bird on the planet.”"
			}, {
                "paragraph": "The peacock replied, “I always thought that I was the most beautiful and happy bird on the planet. But because of my beauty, I am entrapped in this zoo. I have examined the zoo very carefully, and I have realized that the crow is the only bird not kept in a cage. So for past few days I have been thinking that if I were a crow, I could happily roam everywhere.”"
			}, {
                "paragraph": "That’s our problem too. We make unnecessary comparison with others and become sad. We don’t value what God has given us.  This all leads to the vicious cycle of unhappiness.  Learn to be happy in what you have instead of looking at what you don’t have.   There will always be someone who will have more or less than you have.  Person who is satisfied with what he/she has, is the happiest person in the world."
			}]
		},

        {
            "id": 76,
            "title": "The Man and The Little Cat",
            "description": [{
                "paragraph": "One day, an old man was having a stroll in the forest when he suddenly saw a little cat stuck in a hole. The poor animal was struggling to get out. So, he gave him his hand to get him out. But the cat scratched his hand with fear. The man pulled his hand screaming with pain. But he did not stop; he tried to give a hand to the cat again and again.."
			}, {
                "paragraph": "Another man was watching the scene, screamed with surprise, “For god sakes! Stop helping this cat! He’s going to get himself out of there”."
			}, {
                "paragraph": "The other man did not care about him , he just continued saving that animal until he finally succeeded, And then he walked to that man and said , “Son, it is cat’s Instincts that makes him scratch and to hurt, and it is my job to love and care”."
			}, {
                "paragraph": "Moral:  Treat everyone around you with your ethics, not with theirs.   Treat the people the way you want to be treated by them."
			}]
		}, {
            "id": 77,
            "title": "Five More Minutes",
            "description": [{
                "paragraph": "While at the park one day, a woman sat down next to a man on a bench near a playground.  “That’s my son over there,” she said, pointing to a little boy in a red sweater who was gliding down the slide.  “He’s a fine looking boy” the man said. “That’s my daughter on the bike in the white dress.”"
			}, {
                "paragraph": "Then, looking at his watch, he called to his daughter. “What do you say we go, Melissa?”  Melissa pleaded, “Just five more minutes, Dad. Please? Just five more minutes.”  The man nodded and Melissa continued to ride her bike to her heart’s content. Minutes passed and the father stood and called again to his daughter. “Time to go now?”"
			}, {
                "paragraph": "Again Melissa pleaded, “Five more minutes, Dad. Just five more minutes.”  The man smiled and said, “OK.”  “My, you certainly are a patient father,” the woman responded."
			}, {
                "paragraph": "The man smiled and then said, “Her older brother Tommy was killed by a drunk driver last year while he was riding his bike near here. I never spent much time with Tommy and now I’d give anything for just five more minutes with him. I’ve vowed not to make the same mistake with Melissa.  She thinks she has five more minutes to ride her bike. The truth is, I get Five more minutes to watch her play.”"
			}, {
                "paragraph": "Moral: Life is all about making priorities, and family is one and only priority on top of all other, so spend all time you can with loved ones."
			}]
		}, {
            "id": 78,
            "title": "The Wet Pants",
            "description": [{
                "paragraph": "There is a nine-year-old kid sitting at his desk and all of a sudden, there is a puddle between his feet and the front of his pants are wet."
			}, {
                "paragraph": "He thinks his heart is going to stop because he cannot possibly imagine how this has happened. It’s never happened before, and he knows that when the boys find out he will never hear the end of it.."
			}, {
                "paragraph": "When the girls find out, they’ll never speak to him again as long as he lives.  The boy believes his heart is going to stop; he puts his head down and prays this prayer, “Dear God, this is an emergency! I need help now! Five minutes from now I’m dead meat.”  He looks up from his prayer and here comes the teacher with a look in her eyes that says he has been discovered."
			}, {
                "paragraph": "As the teacher is walking toward him, a classmate named Susie is carrying a goldfish bowl that is filled with water. Susie trips in front of the teacher and inexplicably dumps the bowl of water in the boy’s lap."
			}, {
                "paragraph": "The boy pretends to be angry, but all the while is saying to himself, “Thank you, Lord! Thank you, Lord!”"
			}, {
                "paragraph": "Now all of a sudden, instead of being the object of ridicule, the boy is the object of sympathy. The teacher rushes him downstairs and gives him gym shorts to put on while his pants dry out."
			}, {
                "paragraph": "All the other children are on their hands and knees cleaning up around his desk. The sympathy is wonderful. But as life would have it, the ridicule that should have been his has been transferred to someone else – Susie.  She tries to help, but they tell her to get out. “You’ve done enough, you klutz!”"
			}, {
                "paragraph": "Finally, at the end of the day, as they are waiting for the bus, the boy walks over to Susie and whispers, “You did that on purpose, didn’t you?”"
			}, {
                "paragraph": "Susie whispers back, “I wet my pants once too.”"
			}, {
                "paragraph": "Moral:  All of us go through all good and bad things in life.  We should always remember how we felt when we were in same condition and should not mock others for being in it.  Always try to understand their situation as if you are in it and help much as possible praying to god that today you are in a condition to help someone who needs it."
			}]
		},

        {
            "id": 79,
            "title": "Information Please",
            "description": [{
                    "paragraph": "When I was quite young, my father had one of the first telephones in our neighborhood. I remember well the polished, old case fastened to the wall. The shiny receiver hung on the side of the box."
				}, {
                    "paragraph": "I was too little to reach the telephone, but used to listen with fascination when my mother used to talk to it. Then discovered that somewhere inside the wonderful device lived an amazing person – her name was “Information Please” and there was nothing she did not know."
				}, {
                    "paragraph": "“Information Please” could supply any body’s number and the correct time."
				}, {
                    "paragraph": "My first personal experience with this genie_in_the_bottle came one day while my mother was visiting a neighbor. Amusing myself at the tool bench in the basement, I whacked my finger with a hammer. The pain was terrible, but there didn’t seem to be any reason in crying because there was no one home to give sympathy. I walked around the house sucking my throbbing finger, finally arriving at the stairway."
				}, {
                    "paragraph": "The telephone! Quickly, I ran for the foot stool in the parlor and dragged it to the landing. Climbing up, I unhooked the receiver in the parlor and held it to my ear. “Information Please,” I said into the mouthpiece just above my head. A click or two and a small clear voice spoke into my ear."
				}, {
                    "paragraph": "“Information”"
				}, {
                    "paragraph": "“I hurt my finger…” I wailed into the phone. The tears came readily enough now that I had an audience."
				}, {
                    "paragraph": "“Isn’t your mother home?” came the question."
				}, {
                    "paragraph": "“No body’s home but me,” I blubbered."
				}, {
                    "paragraph": "“Are you bleeding?” the voice asked."
				}, {
                    "paragraph": "“No,” I replied. “I hit my finger with the hammer and it hurts.”"
				}, {
                    "paragraph": "“Can you open your icebox?” she asked. I said I could."
				}, {
                    "paragraph": "“Then chip off a little piece of ice and hold it to your finger,” said the voice."
				}, {
                    "paragraph": "After that, I called “Information Please” for everything. I asked her for help with my geography and she told me where Philadelphia was. She helped me with my math. She told me my pet chipmunk, that I had caught in the park just the day before, would eat fruit and nuts."
				}, {
                    "paragraph": "Then, there was the time Petey, our pet canary died. I called “Information Please” and told her the sad story. She listened, then said the usual things grown ups say to soothe a child. But I was un-consoled. I asked her, “Why is it that birds should sing so beautiful and bring joy to all families, only to end up as a heap of feathers on the bottom of a cage?”"
				}, {
                    "paragraph": "She must have sensed my deep concern, for she said quietly, “Paul, always remember that there are other worlds to sing in.”"
				}, {
                    "paragraph": "Somehow I felt better."
				}, {
                    "paragraph": "Another day I was on the telephone. “Information Please.”"
				}, {
                    "paragraph": "“Information,” said the now familiar voice."
				}, {
                    "paragraph": "“How do you spell fix?” I asked."
				}, {
                    "paragraph": "All this took place in a small town in the Pacific Northwest. When I was nine years old, we moved across the country to Boston. I missed my friend very much. “Information Please” belonged in that old wooden box back home and I somehow never thought of trying the tall, shiny new phone that sat on the table in the hall. As I grew into my teens, the memories of those childhood conversations never really left me. Often, In moments of doubt and perplexity I would recall the serene sense of security I had then. I appreciated now how patient, understanding, and kind she was to have spent her time on a little boy."
				}, {
                    "paragraph": "A few years later, on my way west to college, my plane put down in Seattle I had about half_an_hour or so between planes. I spent 15 minutes or so on the phone with my sister, who lived there now. Then, without thinking what I was doing, I dialed my hometown operator and said, “Information, please.”"
				}, {
                    "paragraph": "Miraculously, I heard the small, clear voice I knew so well."
				}, {
                    "paragraph": "“Information.”"
				}, {
                    "paragraph": "I hadn’t planned this, but I heard myself saying, “Could you please tell me how to spell fix?”"
				}, {
                    "paragraph": "There was a long pause. Then came the soft spoken answer, “I guess your finger must have healed by now.”"
				}, {
                    "paragraph": "I laughed, “So it’s really still you,” I said. “I wonder if you have any idea how much you meant to me during that time.”"
				}, {
                    "paragraph": "“I wonder,” she said, “if you know how much your calls meant to me. I never had any children and I used to look forward to your calls.”"
				}, {
                    "paragraph": "I told her how often I had thought of her over the years and I asked if I could call her again when I came back to visit my sister."
				}, {
                    "paragraph": "“Please do,” she said. “Just ask for Sally.”"
				}, {
                    "paragraph": "Three months later I was back in Seattle. A different voice answered, “Information.”"
				}, {
                    "paragraph": "I asked for Sally. “Are you a friend?” she said."
				}, {
                    "paragraph": "“Yes, a very old friend,” I answered."
				}, {
                    "paragraph": "“I’m sorry to have to tell you this,” she said. “Sally had been working part time the last few years because she was sick. She died five weeks ago.” Before I could hang up she said, “Wait a minute. Did you say your name was Paul?”"
				}, {
                    "paragraph": "“Yes.”"
				}, {
                    "paragraph": "Well, Sally left a message for you. She wrote it down in case you called. Let me read it to you. The note said, “Tell him I still say there are other worlds to sing in. He’ll know what I mean.”  I thanked her and hung up. I knew what Sally meant."
				}, {
                    "paragraph": "Moral: Never underestimate the impression you may make on others."
				}

			]
		}, {
            "id": 80,
            "title": "Father and the Donkey",
            "description": [{
                    "paragraph": "Banwarilal is a simple soul who believes whatever he is told. The village boys are aware of this and exploit his simplicity for a few laughs. One day, Banwarilal is on his way to the market with his son to sell their donkey. He comes across some village boys out to have fun."
				}, {
                    "paragraph": "Seeing the father and son duo walking with the donkey, they first suggest that the son ride on the donkey and save the effort. The son is put on the donkey’s back. The boys then ridicule the boy for riding while the father walks. The father and son switch places. The father rides while the son walks. The boys then taunt the father for making the poor son walk and advise the duo to ride the donkey together."
				}, {
                    "paragraph": "Thinking it a good idea they comply. The poor donkey collapses from exhaustion. The boys then express their disgust at the duo for ill treating the donkey and advice that they take the donkey to an animal doctor. The duo again follows the advice."
				}, {
                    "paragraph": "On the way, they come across barking stray dogs. In the confusion that ensues, the donkey falls into the flowing river. The donkey is lost forever. Banwarilal loses the donkey because he follows what he is suggested without thinking for himself."
				}, {
                    "paragraph": "Moral: He who listens to everybody will only become a laughing stock"
				}

			]
		}, {
            "id": 81,
            "title": "Boy’s Job Appraisal",
            "description": [{
                    "paragraph": "A little boy went into a drug store, reached for a soda carton and pulled it over to the telephone. He climbed onto the carton so that he could reach the buttons on the phone and proceeded to punch in seven digits (phone numbers).  The store-owner observed and listened to the conversation."
				}, {
                    "paragraph": "Boy: ‘Lady, Can you give me the job of cutting your lawn?"
				}, {
                    "paragraph": "Woman: (at the other end of the phone line): ‘I already have someone to cut my lawn.’"
				}, {
                    "paragraph": "Boy: ‘Lady, I will cut your lawn for half the price of the person who cuts your lawn now.’"
				}, {
                    "paragraph": "Woman: I’m very satisfied with the person who is presently cutting my lawn"
				}, {
                    "paragraph": "Boy: (with more perseverance) : ‘Lady, I’ll even sweep your curb and your sidewalk, so on Sunday you will have the prettiest lawn in all of Palm beach , Florida.’"
				}, {
                    "paragraph": "Woman: No, thank you."
				}, {
                    "paragraph": "With a smile on his face, the little boy replaced the receiver. The store-owner, who was listening to all this, walked over to the boy."
				}, {
                    "paragraph": "Store Owner: ‘Son… I like your attitude; I like that positive spirit and would like to offer you a job.’"
				}, {
                    "paragraph": "Boy: ‘No thanks.’"
				}, {
                    "paragraph": "Store Owner: But you were really pleading for one."
				}, {
                    "paragraph": "Boy: No Sir, I was just checking my performance at the Job I already have. I am the one who is working for that lady I was talking to!’"
				}, {
                    "paragraph": "Moral: This is what we call ‘Self Appraisal’.  Every time if we don’t get ahead of others, we blame others for it.  We should look to our self and compare, find own weaknesses and work hard to throw away weaknesses.  Always Work Hard, Honest and with full Dedication.  It will always pay up."
				}

			]
		}

        ];

    storiesFac.getStories = function () {
        return stories;
    };
    storiesFac.getStory = function (index) {
        return stories[index];
    };

    return storiesFac;



}])

.factory('quotesFactory', [function () {

    var quoFac = {};

    var quotes = [

        {
            "id": 0,
            "title": "Funny quotes",
            "description": [{
                "paragraph": "“I am going to call my kids Ctrl, Alt and Delete. Then if they muck up I will just hit them all at once.” ",
                "author": ""
            }, {
                "paragraph": "“A computer once beat me at chess, but it was no match for me at kick boxing.” ",
                "author": "Emo Philips"
            }, {
                "paragraph": "“My life needs editing.” ",
                "author": "Mort Sahl"
            }, {
                "paragraph": "“By the time a man realizes that his father was right, he has a son who thinks he’s wrong.” ",
                "author": "Charles Wadsworth"
            }, {
                "paragraph": "“Ladies first. Pretty ladies sooner.” ",
                "author": ""
            }, {
                "paragraph": "“Men marry women with the hope they will never change. Women marry men with the hope they will change. Invariably they are both disappointed.” ",
                "author": "Albert Einstein"
            }, {
                "paragraph": "“The quickest way to double your money is to fold it over and put it back in your pocket.” ",
                "author": "Will Rogers"
            }, {
                "paragraph": "“A successful man is one who makes more money than his wife can spend. A successful woman is one who can find such a man.” ",
                "author": "Lana Turner"
            }, {
                "paragraph": "“Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.” ",
                "author": "Jack Handey"
            }, {
                "paragraph": "“A day without sunshine is like, you know, night.” ",
                "author": "Steve Martin"
            }, {
                "paragraph": "“A lot of people are afraid of heights. Not me, I’m afraid of widths.” ",
                "author": "Steven Wright"
            }, {
                "paragraph": "“Housework can’t kill you, but why take a chance?” ",
                "author": "Phyllis Diller"
            }, {
                "paragraph": "“A stockbroker urged me to buy a stock that would triple its value every year. I told him, ‘At my age, I don’t even buy green bananas.'” ",
                "author": "Claude Pepper"
            }, {
                "paragraph": "“My most brilliant achievement was my ability to be able to persuade my wife to marry me.” ",
                "author": "Winston Churchill"
            }, {
                "paragraph": "“The only time a woman really succeeds in changing a man is when he is a baby.” ",
                "author": "Natalie Wood"
            }, {
                "paragraph": "“I would never die for my beliefs because I might be wrong.”",
                "author": " Bertrand Russell"
            }, {
                "paragraph": "“I never drink water because of the disgusting things that fish do in it.” ",
                "author": "W. C. Fields"
            }, {
                "paragraph": "“I’m writing a book. I’ve got the page numbers done.” ",
                "author": "Steven Wright"
            }, {
                "paragraph": "“Originality is the fine art of remembering what you hear but forgetting where you heard it.” ",
                "author": "Laurence J. Peter"
            }, {
                "paragraph": "“A woman’s mind is cleaner than a man’s: She changes it more often.” ",
                "author": "Oliver Herford"
            }, {
                "paragraph": "“Why do they call it rush hour when nothing moves?” ",
                "author": "Robin Williams"
            }, {
                "paragraph": "“There’s no such thing as soy milk. It’s soy juice.” ",
                "author": "Lewis Black"
            }, {
                "paragraph": "“My uncle Sammy was an angry man. He had printed on his tombstone: ‘What are you looking at?'” ",
                "author": "Margaret Smith"
            }, {
                "paragraph": "“If at first you don’t succeed, find out if the loser gets anything.” ",
                "author": "William Lyon Phelps"
            }, {
                "paragraph": "“Mail your packages early so the post office can lose them in time for Christmas.” ",
                "author": "Johnny Carson"
            }, {
                "paragraph": "“If you die in an elevator, be sure to push the up button.” ",
                "author": "Sam Levenson"
            }, {
                "paragraph": "“If you think nobody cares if you’re alive, try missing a couple of payments.” ",
                "author": "Earl Wilson"
            }, {
                "paragraph": "“A bank is a place that will lend you money if you can prove that you don’t need it.” ",
                "author": "Bob Hope"
            }, {
                "paragraph": "“The human brain is a wonderful thing. It starts working the moment you are born, and never stops until you stand up to speak in public.” ",
                "author": "George Jessel"
            }, {
                "paragraph": "“Regular naps prevent old age, especially if you take them while driving.” ",
                "author": ""
            }, {
                "paragraph": "“Marriage is a relationship in which one person is always right and the other is the husband!” ",
                "author": ""
            }]
        },

        {
            "id": 1,
            "title": "Happiness Quotes",
            "description": [{
                "paragraph": "“Being happy doesn’t mean that everything is perfect. It means that you’ve decided to look beyond the imperfections.”",
                "author": ""
            }, {
                "paragraph": "“We tend to forget that happiness doesn’t come as a result of getting something we don’t have, but rather of recognizing and appreciating what we do have.” ",
                "author": "Frederick Keonig"
            }, {
                "paragraph": "“People love others not for who they are but for how they make them feel” ",
                "author": "Irwin Federman"
            }, {
                "paragraph": "“Each moment of a happy lover’s hour is worth an age of dull and common life” ",
                "author": "Aphra Behn"
            }, {
                "paragraph": "“The reason people find it so hard to be happy is that they always see the past better than it was, the present worse than it is, and the future less resolved than it will be” ",
                "author": "Marcel Pagnol"
            }, {
                "paragraph": "“If you want to live a happy life, tie it to a goal, not to people or things.” ",
                "author": "Albert Einstein"
            }, {
                "paragraph": "“Don’t rely on someone else for your happiness and self worth. Only you can be responsible for that. If you can’t love and respect yourself – no one else will be able to make that happen. Accept who you are – completely; the good and the bad – and make changes as YOU see fit – not because you think someone else wants you to be different.” ",
                "author": "Stacey Charter"
            }, {
                "paragraph": "“Happiness is not the absence of problems but the ability to deal with them.”",
                "author": ""
            }, {
                "paragraph": "“Thousands of candles can be lit from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.”",
                "author": ""
            }, {
                "paragraph": "“It isn’t what you have, or who you are, or where you are, or what you are doing that makes you happy or unhappy. It is what you think about.” ",
                "author": "Dale Carnegie"
            }, {
                "paragraph": "“It was only a sunny smile and little it cost in the giving but like morning light it scattered the night and made the day worth living.”",
                "author": ""
            }, {
                "paragraph": "“There is only one happiness in this life, to love and be loved.” ",
                "author": "George Sand"
            }, {
                "paragraph": "“Happiness always looks small while you hold it in your hands, but let it go, and you learn at once how big and precious it is.” ",
                "author": "Maxim Gork"
            }, {
                "paragraph": "“To forgive is the highest, most beautiful form of love. In return, you will receive untold peace and happiness.” ",
                "author": "Robert Muller"
            }, {
                "paragraph": "“Happiness is like a kiss…you must share it to enjoy it.”",
                "author": ""
            }, {
                "paragraph": "“To be happy with a man you must understand him a lot and love him a little. To be happy with a woman you must love her a lot and not try to understand her at all.” ",
                "author": "Helen Rowland"
            }, {
                "paragraph": "“The best years of your life are the ones in which you decide your problems are your own. You do not blame them on your mother, the ecology, or the president. You realize that you control your own destiny.” ",
                "author": "Albert Ellis"
            }, {
                "paragraph": "“There is only one cause of unhappiness: the false beliefs you have in your head, beliefs so widespread, so commonly held, that it never occurs to you to question them.” ",
                "author": "Anthony de Mello"
            }, {
                "paragraph": "“There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.” ",
                "author": "Epictetus"
            }, {
                "paragraph": "“Happiness is a butterfly, which when pursued, is always just beyond your grasp, but which, if you will sit down quietly, may alight upon you” ",
                "author": "Nathaniel Hawthorne"
            }]
        },

        {
            "id": 2,
            "title": "Inspirational Quotes",
            "description": [{
                "paragraph": "“You see things; and you say, ‘Why?’ But I dream things that never were; and I say, ‘Why not?’” ",
                "author": "George Bernard Shaw"
            }, {
                "paragraph": "“We are all in the gutter, but some of us are looking at the stars.” ",
                "author": "Oscar Wilde"
            }, {
                "paragraph": "“Don’t walk in front of me; I may not follow. Don’t walk behind me; I may not lead. Just walk beside me and be my friend.” ",
                "author": "Albert Camus"
            }, {
                "paragraph": "“Anyone can give up, it’s the easiest thing in the world to do. But to hold it together when everyone else would understand if you fell apart, that’s true strength.”",
                "author": ""
            }, {
                "paragraph": "“Staying up all night is a waste of sleeping, and a waste of sleeping is a waste of dreaming, and dreaming is important because the more dreams you have, the better chance you have of one coming true.”",
                "author": ""
            }, {
                "paragraph": "“Have the courage to say no. Have the courage to face the truth. Do the right thing because it is right. These are the magic keys to living your life with integrity.”",
                "author": ""
            }, {
                "paragraph": "“Only those who will risk going too far can possibly find out how far one can go.”",
                "author": ""
            }, {
                "paragraph": "“Do not go where the path may lead; go instead where there is no path and leave a trail” ",
                "author": "Ralph Waldo Emerson"
            }, {
                "paragraph": "“The value of an idea lies in the using of it.”",
                "author": ""
            }, {
                "paragraph": "“The soldier who fights to death never dies, but the soldier who fights for existence never truly exists.”",
                "author": ""
            }, {
                "paragraph": "Every accomplishment starts with the decision to try. ",
                "author": ""
	}, {
                "paragraph": "No Dreamer is ever too small, No Dream is ever too big. ",
                "author": ""
	}, {
                "paragraph": " One day you will wake up and there won't be time to do the things you always wanted.. Do them now! ",
                "author": "Paulo Coelho"
	}, {
                "paragraph": "The only question in life is whether or not you are going to answer a hearty YES! to your next adventure.",
                "author": "Joseph Campbell"
	}, {
                "paragraph": "Some people dream of great accomplishments, while others stay awake and accomplish them. ",
                "author": ""
	}, {
                "paragraph": "Be who you are and say what you feel because those who mind don't matter and those who matter don't mind. ",
                "author": "Dr. Seuss"
	}, {
                "paragraph": "Beautiful things don't just happen, if  you want something marvelous you must make something marvelous.",
                "author": ""
	}, {
                "paragraph": "Everyone wants happiness, no one wants pain.. but you can't have a rainbow without a little rain.",
                "author": ""
	}, {
                "paragraph": "If 'Plan A' didn't work, don't worry about it, the alphabet has 25 more letters.. stay cool.",
                "author": ""
	}, {
                "paragraph": " I am in charge of how I feel and today I choose happiness.",
                "author": ""
	}, {
                "paragraph": "Devote yourself to an idea, go make it happen, struggle on it, overcome your fears, Smile don't forget this is your dream.",
                "author": ""
	}, {
                "paragraph": "Good things don't come to those who wait.. Good things come to those who work their asses off to achieve them.",
                "author": ""
	}, {
                "paragraph": "Enjoy the little things in life, for one day you'll look back and realize they were the big things.  ",
                "author": "Kurt Vonnegut"
	}, {
                "paragraph": "It is not how much we have, but how much we enjoy that makes us happy.",
                "author": ""
	}, {
                "paragraph": "If it scares you it might be a good thing to try.",
                "author": "Seth Godin"
	}, {
                "paragraph": "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all. In which case you fail by default.",
                "author": "J.K. Rowling"
	}, {
                "paragraph": "You can't start the next chapter in your life if you keep re-reading the last one.",
                "author": ""
	}, {
                "paragraph": "Everything you can imagine is real.",
                "author": "Pablo Picasso"
	}, {
                "paragraph": "To live our creative life we must lose our fear of being wrong. ",
                "author": "Joseph Chilton Pearce"
	}, {
                "paragraph": "A ship in the harbor is safe, but that's not what ships are for.",
                "author": ""
	}, {
                "paragraph": "The trick is to enjoy life, don't wish away your days waiting for better ones ahead. ",
                "author": " Marjorie Pay Hinckley"
	}, {
                "paragraph": "Nothing great was ever achieved without enthusiasm. ",
                "author": "Emerson"
	}, {
                "paragraph": "It's Kind of fun to do the impossible.",
                "author": "Walt Disney"
	}, {
                "paragraph": " Out of clutter find simplicity. From discord find harmony. In the middle of difficulty lies opportunity.",
                "author": "Einstein"
	}, {
                "paragraph": "Don't let someone who gave up on their dreams talk you out of yours.",
                "author": ""
	}, {
                "paragraph": "The greatest concern in the minds of men will always be what could have been.",
                "author": ""
	}, {
                "paragraph": " Work for a cause, not for applause. Live life to express not to impress. Don't strive to make your presence noticed, just make your absence felt.",
                "author": ""
	}, {
                "paragraph": "The best way to predict the future is to create it.",
                "author": ""
	}, {
                "paragraph": "Remember that guy that gave up? Neither does anyone else.",
                "author": ""
	}]
        },

        {
            "id": 3,
            "title": "Inspiring Quotes",
            "description": [{
                "paragraph": "It’s not who you are that holds you back, it’s who you think you’re not.",
                "author": ""
            }, {
                "paragraph": "“Live as if you were to die tomorrow. Learn as if you were to live forever.” ",
                "author": "Mahatma Gandhi"
            }, {
                "paragraph": "“If you only do what you know you can do- you never do very much.” ",
                "author": "Tom Krause"
            }, {
                "paragraph": "“Reach high, for stars lie hidden in your soul. Dream deep, for every dream precedes the goal.” ",
                "author": "Pamela Vaull Starr"
            }, {
                "paragraph": "“When it is obvious that the goals cannot be reached, don’t adjust the goals, adjust the action steps.”",
                "author": ""
            }, {
                "paragraph": "“It is difficult to inspire others to accomplish what you haven’t been willing to try.”",
                "author": ""
            }, {
                "paragraph": "“Little by little one walks far.”",
                "author": ""
            }, {
                "paragraph": "“If you see a friend without a smile; give him one of yours.”",
                "author": ""
            }, {
                "paragraph": "“I certainly don’t regret my experiences because without them, I couldn’t imagine who or where I would be today. Life is an amazing gift to those who have overcome great obstacles, and attitude is everything!” ",
                "author": "Sasha Azevedo"
            }, {
                "paragraph": "“Laugh often, Dream big, Reach for the stars!”",
                "author": ""
            }, {
                "paragraph": "“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. Don’t let the noise of other’s opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.” ",
                "author": "Steve Jobs"
            }, {
                "paragraph": "“Anyone can give up, it’s the easiest thing in the world to do. But to hold it together when everyone else would understand if you fell apart, that’s true strength.”",
                "author": ""
            }, {
                "paragraph": "“Try and fail, but don’t fail to try.” ",
                "author": "Stephen Kaggwa"
            }, {
                "paragraph": "“A true friend sees the good in everything, and brings out the best in the worst of things.” ",
                "author": "Sasha Azevedo"
            }, {
                "paragraph": "“You won’t realize the distance you’ve walked until you take a look around and realize how far you’ve been.”",
                "author": ""
            }, {
                "paragraph": "“Man can live about forty days without food, about three days without water, about eight minutes without air, but only for one second without hope.”",
                "author": ""
            }, {
                "paragraph": "“If your actions inspire others to dream more, learn more, do more and become more, you are a leader.” ",
                "author": "John Quincy Adams"
            }, {
                "paragraph": "“Man cannot discover new oceans unless he has the courage to lose sight of the shore.” ",
                "author": "Andre Gide"
            }, {
                "paragraph": "“Have the courage to say no. Have the courage to face the truth. Do the right thing because it is right. These are the magic keys to living your life with integrity.” ",
                "author": "W. Clement Stone"
            }, {
                "paragraph": "“A real friend is one who walks in when the rest of the world walks out.” ",
                "author": "Walter Winchell"
            }, {
                "paragraph": "“Weakness of attitude becomes weakness of character.” ",
                "author": "Albert Einstein"
            }, {
                "paragraph": "“People come into your life and people leave it… you just have to trust that life has a road mapped out for you.”",
                "author": ""
            }, {
                "paragraph": "“We should be taught not to wait for inspiration to start a thing. Action always generates inspiration. Inspiration seldom generates action.” ",
                "author": "Frank Tibolt"
            }, {
                "paragraph": "“I dreamed a thousand new paths. . . I woke and walked my old one.”",
                "author": ""
            }, {
                "paragraph": "“Don’t listen to anyone who tells you that you can’t do this or that. That’s nonsense. Make up your mind, you’ll never use crutches or a stick, then have a go at everything. Go to school, join in all the games you can. Go anywhere you want to. But never, never let them persuade you that things are too difficult or impossible.”  ",
                "author": "Douglas Bader"
            }, {
                "paragraph": "“Don’t cry because it’s over. Smile because it happened.” ",
                "author": "Dr. Seuss"
            }]
        },

        {
            "id": 4,
            "title": "Love Quotes",
            "description": [{
                "paragraph": "“Love is just a word until someone comes along and gives it meaning.”",
                "author": ""
            }, {
                "paragraph": "“Every man is afraid of something. That’s how you know he’s in love with you; when he is afraid of losing you.”",
                "author": ""
            }, {
                "paragraph": "“Love is like an earthquake-unpredictable, a little scary, but when the hard part is over you realize how lucky you truly are.”",
                "author": ""
            }, {
                "paragraph": "“The love that lasts the longest is the love that is never returned.”  ",
                "author": "William Somerset Maugham"
            }, {
                "paragraph": "“For it was not into my ear you whispered, but into my heart. It was not my lips you kissed, but my soul.” ",
                "author": "Judy Garland"
            }, {
                "paragraph": "“One of the hardest things in life is watching the person you love, love someone else.”",
                "author": ""
            }, {
                "paragraph": "“If you love somebody, let them go. If they return, they were always yours. If they don’t, they never were.”",
                "author": ""
            }, {
                "paragraph": "“Trying to make someone fall in love with you is about as pointless as trying to control who you fall in love with.”",
                "author": ""
            }, {
                "paragraph": "“It takes a minute to have a crush on someone, an hour to like someone and a day to love someone – but it takes a lifetime to forget someone.”",
                "author": ""
            }, {
                "paragraph": "“Laugh as much as you breathe and love as long as you live.”",
                "author": ""
            }, {
                "paragraph": "“To the world you may be just one person, but to one person you may be the world.”",
                "author": ""
            }, {
                "paragraph": "“I love you not because of who you are, but because of who I am when I am with you.”",
                "author": ""
            }, {
                "paragraph": "“You don’t love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear.”",
                "author": ""
            }, {
                "paragraph": "“It hurts to love someone and not be loved in return, but what is the most painful is to love someone and never find the courage to let the person know how you feel.”",
                "author": ""
            }]
        },

        {
            "id": 5,
            "title": "Mother Teresa Quotes",
            "description": [{
                "paragraph": "“We forget that forgiveness is greater than revenge. People make mistakes. We are allowed to make mistakes. But the actions we take while in a rage will haunt us forever.",
                "author": "Mother Teresa"
            }, {
                "paragraph": "Pause and ponder. Think before you act. Be patient. Forgive & forget. Love one and all.",
                "author": "Mother Teresa"
            }, {
                "paragraph": "If you judge people, you have no time to love them.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“Everytime you smile at someone, it is an action of love, a gift to that person, a beautiful thing.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“Let us always meet each other with a smile, for the smile is the beginning of love.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“Let us touch the dying, the poor, the lonely and the unwanted according to the graces we have received and let us not be ashamed or slow to do the humble work.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“It is easy to love the people far away. It is not always easy to love those close to us.",
                "author": "Mother Teresa"
            }, {
                "paragraph": "It is easier to give a cup of rice to relieve hunger than to relieve the loneliness and pain of someone unloved in our own home.",
                "author": "Mother Teresa"
            }, {
                "paragraph": "Bring love into your home for this is where our love for each other must start.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“The most terrible poverty is loneliness and the feeling of being unloved.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“We ourselves feel that what we are doing is just a drop in the ocean. But the ocean would be less because of that missing drop.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“It is a kingly act to assist the fallen.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“Kind words can be short and easy to speak, but their echoes are truly endless.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“I have found the paradox, that if you love until it hurts, there can be no more hurt, only more love.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“Be faithful in small things because it is in them that your strength lies.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“Being unwanted, unloved, uncared for, forgotten by everybody, I think that is a much greater hunger, a much greater poverty than the person who has nothing to eat.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“If we have no peace, it is because we have forgotten that we belong to each other.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“Love begins at home, and it is not how much we do… but how much love we put in that action.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“Spread love everywhere you go. Let no one ever come to you without leaving happier.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“We need to find God, and he cannot be found in noise and restlessness. God is the friend of silence. See how nature – trees, flowers, grass- grows in silence; see the stars, the moon and the sun, how they move in silence… We need silence to be able to touch souls.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“Peace begins with a smile.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“Even the rich are hungry for love, for being cared for, for being wanted, for having someone to call their own.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“If you can’t feed a hundred people, then feed just one.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“Let us touch the dying, the poor, the lonely and the unwanted according to the graces we have received and let us not be ashamed or slow to do the humble work.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“Let us not be satisfied with just giving money. Money is not enough, money can be got, but they need your hearts to love them. So, spread your love everywhere you go.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“Intense love does not measure, it just gives.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“I want you to be concerned about your next door neighbor. Do you know your next door neighbor?”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“We shall never know all the good that a simple smile can do.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“I try to give to the poor people for love what the rich could get for money. No, I wouldn’t touch a leper for a thousand pounds; yet I willingly cure him for the love of God.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“There must be a reason why some people can afford to live well. They must have worked for it. I only feel angry when I see waste. When I see people throwing away things that we could use.”",
                "author": "Mother Teresa"
            }, {
                "paragraph": "“The greatest destroyer of peace is abortion because if a mother can kill her own child, what is left for me to kill you and you to kill me? There is nothing between.”",
                "author": "Mother Teresa"
            }]
        },

        {
            "id": 6,
            "title": "Motivational Quotes",
            "description": [{
                "paragraph": "“Obstacles are things a person sees when he takes his eyes off his goal.” ",
                "author": "E. Joseph Cossman"
            }, {
                "paragraph": "“We are all faced with a series of great opportunities brilliantly disguised as impossible situations.” ",
                "author": "Charles R. Swindoll"
            }, {
                "paragraph": "“Keep your dreams alive. Understand to achieve anything requires faith and belief in yourself, vision, hard work, determination, and dedication. Remember all things are possible for those who believe.” ",
                "author": "Gail Devers"
            }, {
                "paragraph": "“What is not started today is never finished tomorrow.”",
                "author": ""
            }, {
                "paragraph": "“The greater danger for most of us lies not in setting our aim too high and falling short; but in setting our aim too low, and achieving our mark.”",
                "author": ""
            }, {
                "paragraph": "“As a well spent day brings happy sleep, so a life well spent brings happy death.” ",
                "author": "Leonardo da Vinci"
            }, {
                "paragraph": "“Failure will never overtake me if my determination to succeed is strong enough.”",
                "author": ""
            }, {
                "paragraph": "“To accomplish great things, we must dream as well as act.”",
                "author": ""
            }, {
                "paragraph": "“Companies that solely focus on competition will ultimately die. Those that focus on value creation will thrive.” ",
                "author": "Edward de Bono"
            }, {
                "paragraph": "“The surest way not to fail is to determine to succeed” ",
                "author": "Richard Brinsley Sheridan"
            }, {
                "paragraph": "“Enthusiasm is excitement with inspiration, motivation, and a pinch of creativity.”",
                "author": ""
            }, {
                "paragraph": "“Every accomplishment starts with the decision to try.”",
                "author": ""
            }, {
                "paragraph": "“Shoot for the moon. Even if you miss, you’ll land among the stars.”",
                "author": ""
            }, {
                "paragraph": "“Don’t wait until everything is just right. It will never be perfect. There will always be challenges, obstacles and less than perfect conditions. So what. Get started now. With each step you take, you will grow stronger and stronger, more and more skilled, more and more self-confident and more and more successful.” ",
                "author": "Mark Victor Hansen"
            }, {
                "paragraph": "“Success is not final, failure is not fatal: it is the courage to continue that counts.” ",
                "author": "Winston Churchill"
            }, {
                "paragraph": "“Never, never, never, never give up.” ",
                "author": "Winston Churchill"
            }, {
                "paragraph": "“Most folks are about as happy as they make their minds up to be.” ",
                "author": "Abraham Lincoln"
            }, {
                "paragraph": "“If your actions inspire others to dream more, learn more, do more and become more, you are a leader.” ",
                "author": "John Quincy Adams"
            }, {
                "paragraph": "“You will find as you look back upon your life that the moments when you have really lived are the moments when you have done things in the spirit of love.” ",
                "author": "Henry Drummond"
            }, {
                "paragraph": "“I would much rather have regrets about not doing what people said, than regretting not doing what my heart led me to and wondering what life had been like if I’d just been myself.” ",
                "author": "Brittany Renée"
            }, {
                "paragraph": "“Motivation is what gets you started. Habit is what keeps you going.” ",
                "author": "Jim Rohn"
            }, {
                "paragraph": "“It’s kind of fun to do the impossible.” ",
                "author": "Walt Disney"
            }, {
                "paragraph": "“Do not brood over your past mistakes and failures as this will only fill your mind with grief, regret and depression. Do not repeat them in the future.” ",
                "author": "Swami Sivananda"
            }, {
                "paragraph": "“Stop acting as if life is a rehearsal. Live this day as if it were your last. The past is over and gone. The future is not guaranteed.” ",
                "author": "Wayne Dyer"
            }, {
                "paragraph": "“To move ahead you need to believe in yourself…have conviction in your beliefs and the confidence to execute those beliefs.” ",
                "author": "Adlin Sinclair"
            }, {
                "paragraph": "“People underestimate their capacity for change. There is never a right time to do a difficult thing. A leader’s job is to help people have vision of their potential.” ",
                "author": "John Porter"
            }, {
                "paragraph": "“Trust yourself. You know more than you think you do.” ",
                "author": "Benjamin Spock"
            }]
        },

        {
            "id": 7,
            "title": "Positive Quotes",
            "description": [{
                "paragraph": "“Keep true, never be ashamed of doing right; decide on what you think is right and stick to it.” ",
                "author": "T.S. Eliot"
            }, {
                "paragraph": "“If you think about disaster, you will get it. Brood about death and you hasten your demise. Think positively and masterfully, with confidence and faith, and life becomes more secure, more fraught with action, richer in achievement and experience.” ",
                "author": "Swami Vivekananda"
            }, {
                "paragraph": "“The sun does not shine for a few trees and flowers, but for the wide world’s joy.” ",
                "author": "Henry Ward Beecher"
            }, {
                "paragraph": "“The positive thinker sees the invisible, feels the intangible, and achieves the impossible.”",
                "author": ""
            }, {
                "paragraph": "“Instead of thinking about what you’re missing, try thinking about what you have that everyone else is missing.”",
                "author": ""
            }, {
                "paragraph": "“There is little difference in people, but that little difference makes a big difference. The little difference is attitude. The big difference is whether it is positive or negative.” ",
                "author": "W. Clement Stone"
            }, {
                "paragraph": "“The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.” ",
                "author": "Winston Churchill"
            }, {
                "paragraph": "“You’ve done it before and you can do it now. See the positive possibilities. Redirect the substantial energy of your frustration and turn it into positive, effective, unstoppable determination.” ",
                "author": "Ralph Marston"
            }, {
                "paragraph": "“Be yourself. Above all, let who you are, what you are, what you believe, shine through every sentence you write, every piece you finish.” ",
                "author": "John Jakes"
            }, {
                "paragraph": "“Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for.” ",
                "author": "Epicurus"
            }, {
                "paragraph": "“When you put faith, hope and love together, you can raise positive kids in a negative world.”",
                "author": ""
            }, {
                "paragraph": "“To begin to think with purpose is to enter the ranks of those strong ones who only recognize failure as one of the pathways to attainment.” ",
                "author": "James Allen"
            }, {
                "paragraph": "“I am not afraid of tomorrow, for I have seen yesterday and I love today.” ",
                "author": "William Allen White"
            }, {
                "paragraph": "“When the sun rises, it rises for everyone.”",
                "author": ""
            }, {
                "paragraph": "“When you get into a tight place and everything goes against you, till it seems as though you could not hold on a minute longer, never give up then, for that is just the place and time that the tide will turn.” ",
                "author": "Harriet Beecher Stowe"
            }, {
                "paragraph": "“That’s my gift. I let that negativity roll off me like water off a duck’s back. If it’s not positive, I didn’t hear it. If you can overcome that, fights are easy.” ",
                "author": "George Foreman"
            }, {
                "paragraph": "“Positive thinking will let you do everything better than negative thinking will.” ",
                "author": "Zig Ziglar"
            }, {
                "paragraph": "“It is important that you recognize your progress and take pride in your accomplishments. Share your achievements with others. Brag a little. The recognition and support of those around you is nurturing.” ",
                "author": "Rosemarie Rossetti"
            }, {
                "paragraph": "“If you don’t stand for something you will fall for anything.” ",
                "author": "Malcolm X"
            }, {
                "paragraph": "“Think like a queen. A queen is not afraid to fail. Failure is another steppingstone to greatness.” ",
                "author": "Oprah Winfrey"
            }, {
                "paragraph": "“Once you replace negative thoughts with positive ones, you’ll start having positive results.” ",
                "author": "Willie Nelson"
            }, {
                "paragraph": "“Fear less, hope more; Eat less, chew more; Whine less, breathe more; Talk less, say more; Love more, and all good things will be yours” ",
                "author": "Swedish Proverb"
            }, {
                "paragraph": "“These then are my last words to you. Be not afraid of life. Believe that life is worth living and your belief will help create the fact.” ",
                "author": "William James"
            }]
        },

        {
            "id": 8,
            "title": "Success Quotes",
            "description": [{
                "paragraph": "“You have to learn the rules of the game. And then you have to play better than anyone else.” ",
                "author": "Albert Einstein"
            }, {
                "paragraph": "“Success is a state of mind. If you want success, start thinking of yourself as a success.” ",
                "author": "Dr. Brothers"
            }, {
                "paragraph": "“Excellence is not a singular act, but a habit. You are what you repeatedly do.” ",
                "author": "Shaquille Oneal"
            }, {
                "paragraph": "“The greatest barrier to success is the fear of failure.” ",
                "author": "Sven Goran Eriksson"
            }, {
                "paragraph": "“Success is simple. Do what’s right, the right way, at the right time.” ",
                "author": "Arnold H. Glasgow"
            }, {
                "paragraph": "“Success is focusing the full power of all you are on what you have a burning desire to achieve.” ",
                "author": "Wilfred Peterson"
            }, {
                "paragraph": "“Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.” ",
                "author": "Jamie Paolinetti"
            }, {
                "paragraph": "“People have to really suffer before they can risk doing what they love.” ",
                "author": "Chuck Palahniuk"
            }, {
                "paragraph": "“Success means having the courage, the determination, and the will to become the person you believe you were meant to be.” ",
                "author": "George Sheehan"
            }, {
                "paragraph": "“Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.” ",
                "author": "Herman Cain"
            }, {
                "paragraph": "“To succeed in life, you need two things: ignorance and confidence.” ",
                "author": "Mark Twain"
            }, {
                "paragraph": "“Striving for success without hard work is like trying to harvest where you haven’t planted.” ",
                "author": "David Bly"
            }, {
                "paragraph": "“To succeed you need to find something to hold on to, something to motivate you, something to inspire you.” ",
                "author": "Tony Dorsett"
            }, {
                "paragraph": "“Every success is built on the ability to do better than good enough.”",
                "author": ""
            }, {
                "paragraph": "“There are no secrets to success. It is the result of preparation, hard work, and learning from failure.” ",
                "author": "Colin Powell"
            }, {
                "paragraph": "“Life’s real failure is when you do not realize how close you were to success when you gave up.”",
                "author": ""
            }, {
                "paragraph": "“Success is largely a matter of holding on after others have let go.”",
                "author": ""
            }, {
                "paragraph": "“Some people dream of success while others wake up and work hard at it.”",
                "author": ""
            }, {
                "paragraph": "“The best way to succeed in this world is to act on the advice you give to others.”",
                "author": ""
            }]
        },

        {
            "id": 9,
            "title": "Quotes About Not Giving Up",
            "description": [{
                "paragraph": "“A winner is someone who gets up one more time than he is knocked down.” ",
                "author": ""
            }, {
                "paragraph": "“Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.” ",
                "author": "Samuel Beckett"
            }, {
                "paragraph": "“It’s not that I’m so smart, it’s just that I stay with problems longer.” ",
                "author": "Albert Einstein"
            }, {
                "paragraph": "“Life is like riding a bicycle. To keep your balance, you must keep moving.” ",
                "author": "Albert Einstein"
            }, {
                "paragraph": "“Don’t be discouraged. It’s often the last key in the bunch that opens the lock.” ",
                "author": ""
            }, {
                "paragraph": "“Never give up on something that you can’t go a day without thinking about.” ",
                "author": "Winston Churchill"
            }, {
                "paragraph": "“Winners never quit, and quitters never win.” ",
                "author": "Vince Lombardi"
            }, {
                "paragraph": "“Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.” ",
                "author": "Dale Carnegie"
            }, {
                "paragraph": "“Difficult things take a long time, impossible things a little longer.” ",
                "author": ""
            }, {
                "paragraph": "“People will rate you, hate you, shake you, and break you… but how strong you stand is what makes you.” ",
                "author": ""
            }, {
                "paragraph": "“The greatest achievements of the human mind are generally received with distrust.” ",
                "author": "Arthur Schopenhauer"
            }, {
                "paragraph": "“Many of life’s failures are people who did not realize how close they were to success when they gave up.” ",
                "author": "Thomas Edison"
            }, {
                "paragraph": "“I have not failed, I have just found 10,000 ways that won’t work.” ",
                "author": "Thomas Edison"
            }, {
                "paragraph": "“I am not discouraged because every wrong attempt discarded is a step forward.” ",
                "author": "Thomas Edison"
            }, {
                "paragraph": "“It does not matter how slowly you go so long as you do not stop.” ",
                "author": "Confucius"
            }, {
                "paragraph": "“Our greatest glory is not in never falling but in rising every time we fall.” ",
                "author": "Confucius"
            }, {
                "paragraph": "“It is not wanting to win that makes you a winner; it is refusing to fail.” ",
                "author": ""
            }, {
                "paragraph": "“It is never too late to be what you might have been.” ",
                "author": "George Eliot"
            }, {
                "paragraph": "“Never give up, for that is just the place and time that the tide will turn.” ",
                "author": "Harriet Stowe"
            }, {
                "paragraph": "“Nothing could be worse than the fear that one had given up too soon, and left one unexpended effort that might have saved the world.” ",
                "author": "Jane Addams"
            }, {
                "paragraph": "“People are always blaming circumstances for what they are. I don’t believe in circumstances. The people who get ahead in this world are the people who get up and look for the circumstances they want, and if they can’t find them, make them.” ",
                "author": "George Bernard Shaw"
            }, {
                "paragraph": "“Success seems to be largely a matter of hanging on after others have let go.” ",
                "author": "William Feather"
            }, {
                "paragraph": "“In order to succeed, your desire for success should be greater than your fear of failure.” ",
                "author": "Bill Cosby"
            }, {
                "paragraph": "“Successful men and women keep moving. They make mistakes, but they don’t quit.” ",
                "author": "Conrad Hilton"
            }, {
                "paragraph": "“Keep on going, and the chances are that you will stumble on something, perhaps when you are least expecting it. I never heard of anyone ever stumbling on something sitting down.” ",
                "author": "Charles F. Kettering"
            }, {
                "paragraph": "“It’s not just how hard you try, it’s how well you will succeed from trying hard.” ",
                "author": "Miles Thompson"
            }, {
                "paragraph": "“The day you give up on your dreams is the day you give up on yourself.”  ",
                "author": ""
            }, {
                "paragraph": "“The harder you fall the higher you bounce.” ",
                "author": ""
            }, {
                "paragraph": "“Don’t give up. There are too many nay-sayers out there who will try to discourage you. Don’t listen to them. The only one who can make you give up is yourself.” ",
                "author": "Satchel Paige"
            }, {
                "paragraph": "“Never let your head hang down. Never give up or sit down and grieve. Find another way.” ",
                "author": ""
            }, {
                "paragraph": "“When you are going through hell, keep on going. Never never never give up.” ",
                "author": "Winston Churchill"
            }, {
                "paragraph": "“You just can’t beat the person who won’t give up.” ",
                "author": "Babe Ruth"
            }, {
                "paragraph": "“When you feel like giving up, remember why you held on for so long in the first place.”  ",
                "author": ""
            }, {
                "paragraph": "“Never consider the possibility of failure; as long as you persist, you will be successful.” ",
                "author": "Brian Tracy"
            }, {
                "paragraph": "“Never give up on what you really want to do. The person with big dreams is more powerful than one with all the facts.” ",
                "author": ""
            }, {
                "paragraph": "“Don’t let the fear of the time it will take to accomplish something stand in the way of your doing it. The time will pass anyway; we might just as well put that passing time to the best possible use.” ",
                "author": "Earl Nightingale"
            }, {
                "paragraph": "“Whatever course you decide upon, there is always someone to tell you that you are wrong. There are always difficulties arising which tempt you to believe that your critics are right. To map out a course of action and follow it to an end requires courage.” ",
                "author": "Ralph Waldo Emerson"
            }, {
                "paragraph": "“Believe that life is worth living and your belief will help create the fact.” ",
                "author": "William James"
            }, {
                "paragraph": "“Things don’t go wrong and break your heart so you can become bitter and give up. They happen to break you down and build you up so you can be all that you were intended to be.” ",
                "author": "Charlie Jones"
            }]
        },

        {
            "id": 10,
            "title": "Education quotes",
            "description": [{
                "paragraph": "“Education is the most powerful weapon which you can use to change the world.” ",
                "author": "Nelson Mandela"
            }, {
                "paragraph": "“Teachers open the door, but you enter by yourself.” ",
                "author": ""
            }, {
                "paragraph": "“Develop a passion for learning. If you do, you will never cease to grow.” ",
                "author": "Anthony J. D’Angelo"
            }, {
                "paragraph": "“The great difficulty in education is to get experience out of ideas.” ",
                "author": "George Santayana"
            }, {
                "paragraph": "“The important thing is not to stop questioning.” ",
                "author": "Albert Einstein"
            }, {
                "paragraph": "“In education, nothing works if the students don’t.” ",
                "author": "Donald E. Simanek"
            }, {
                "paragraph": "“An investment in knowledge always pays the best interest.” ",
                "author": ""
            }, {
                "paragraph": "“Learning is not attained by chance, it must be sought for with ardor and diligence.” ",
                "author": "Abigail Adams"
            }, {
                "paragraph": "“The person who is educated is the one who has learned how to learn and change.” ",
                "author": "Carl Rogers"
            }, {
                "paragraph": "“Education is not the filling a bucket but the lighting of a fire.” ",
                "author": "William Butler Yeats"
            }, {
                "paragraph": "“The object of education is to prepare the young to educate themselves throughout their lives.” ",
                "author": "Robert M. Hutchins"
            }, {
                "paragraph": "“The whole purpose of education is to turn mirrors into windows.” ",
                "author": "Sydney J. Harris"
            }, {
                "paragraph": "“The roots of education are bitter, but the fruit is sweet.” ",
                "author": "Aristotle"
            }, {
                "paragraph": "“Education is the best provision for old age.” ",
                "author": "Aristotle"
            }, {
                "paragraph": "“Education is what survives when what has been learned has been forgotten.” ",
                "author": "B.F. Skinner"
            }, {
                "paragraph": "“All our dreams can come true…if we have the courage to pursue them.” ",
                "author": "Walt Disney"
            }, {
                "paragraph": "“The one real object of education is to have a man in the condition of continually asking questions.” ",
                "author": "Bishop Mandell Creighton"
            }, {
                "paragraph": "“The larger the island of knowledge, the longer the shoreline of wonder.” ",
                "author": "Ralph W. Sockman"
            }, {
                "paragraph": "“A professor is someone who talks in someone else’s sleep.” ",
                "author": "W.H. Auden"
            }, {
                "paragraph": "“You cannot help but learn more as you take the world into your hands. Take it up reverently, for it is an old piece of clay, with millions of thumbprints on it.” ",
                "author": "John Updike"
            }, {
                "paragraph": "“Of course there’s a lot of knowledge in universities: the freshmen bring a little in; the seniors don’t take much away, so knowledge sort of accumulates.” ",
                "author": "Lawrence Lowell"
            }, {
                "paragraph": "“Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did. So throw off the bowlines, sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.” ",
                "author": ""
            }, {
                "paragraph": "“The things taught in schools and colleges are not an education, but the means of education.” ",
                "author": "Ralph Waldo Emerson"
            }, {
                "paragraph": "“Education is an admirable thing, but it is well to remember from time to time that nothing worth knowing can be taught.” ",
                "author": "Oscar Wilde"
            }, {
                "paragraph": "“An education isn’t how much you have committed to memory, or even how much you know. It’s being able to differentiate between what you know and what you don’t.” ",
                "author": "Anatole France"
            }, {
                "paragraph": "“Education is a progressive discovery of our own ignorance.” ",
                "author": "Will Durant"
            }, {
                "paragraph": "“Education’s purpose is to replace an empty mind with an open one.” ",
                "author": "Malcolm Forbes"
            }, {
                "paragraph": "“Education is the ability to listen to almost anything without losing your temper or your self-confidence.” ",
                "author": "Robert Frost"
            }, {
                "paragraph": "“A human being is not attaining his full heights until he is educated.” ",
                "author": "Horace Mann"
            }, {
                "paragraph": "“Education is learning what you didn’t even know you didn’t know.” ",
                "author": "Daniel J. Boorstin"
            }, {
                "paragraph": "“Learning is a result of listening, which in turn leads to even better listening and attentiveness.” ",
                "author": "Alice Miller"
            }, {
                "paragraph": "“Education is simply the soul of a society as it passes from one generation to another.” ",
                "author": "Gilbert K. Chesterton"
            }]
        },

        {
            "id": 11,
            "title": "Quotes from Albert Einstein, Thomas Edison, and Benjamin Franklin!",
            "description": [{
                "paragraph": "“Imagination is more important than knowledge. Knowledge is limited.”"
            }, {
                "paragraph": "“Anyone who has never made a mistake has never tried anything new.”"
            }, {
                "paragraph": "“In the middle of difficulty lies opportunity.”"
            }, {
                "paragraph": "“I think and think for months and years. Ninety-nine times, the conclusion is false. The hundredth time I am right.”"
            }, {
                "paragraph": "“The only thing that interferes with my learning is my education.”"
            }, {
                "paragraph": "“The whole of science is nothing more than a refinement of everyday thinking.”"
            }, {
                "paragraph": "“Education is what remains after one has forgotten everything he learned in school.”"
            }, {
                "paragraph": "“The important thing is not to stop questioning. Curiosity has its own reason for existing.”"
            }, {
                "paragraph": "“Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.”"
            }, {
                "paragraph": "“Many of life’s failures are people who did not realize how close they were to success when they gave up.”"
            }, {
                "paragraph": "“I am not discouraged, because every wrong attempt discarded is another step forward.”"
            }, {
                "paragraph": "“He that is good for making excuses is seldom good for anything else”"
            }, {
                "paragraph": "“Do not fear mistakes. You will know failure. Continue to reach out.”"
            }, {
                "paragraph": "“By failing to prepare, you are preparing to fail.”"
            }]
        }

        ];

    quoFac.getQuotes = function () {
        return quotes;
    };

    quoFac.getQuotations = function (index) {
        return quotes[index];
    };

    return quoFac;

}])


.factory('interestFactory', [function () {
    var intFac = {};

    var questions =

        [{
                "question": "Swipe Left Or Right"
            },
            {
                "question": "When was the last time you tried something new?"
	}, {
                "question": "What makes you want to do better?"
	}, {
                "question": "What do you love to do? Do you do it often? If the answer is no, why not?"
	}, {
                "question": "What can you do today that you could not do a year ago?"
	}, {
                "question": "Where do you see yourself in one year? five years? ten years?"
	}, {
                "question": "Do you like your job?"
	}, {
                "question": "What would you do different if you were reborn?"
	}, {
                "question": "Have you done anything lately worth remembering?"
	}, {
                "question": "What are you excited about?"
	}, {
                "question": "What's your biggest problem?"
	}, {
                "question": "When was the last time you traveled somewhere new?"
	}, {
                "question": "What would you regret not doing?"
	}, {
                "question": "What makes you smile?"
	}, {
                "question": "If the average lifespan was 50 years, would you do anything differently?"
	}, {
                "question": "What do you want most out of life?"
	}, {
                "question": "What impact do you want to leave in the world?"
	}, {
                "question": "What do you want to be remembered by?"
	}, {
                "question": "If all came back around to you, would it help you or hurt you?"
	}, {
                "question": "If you had the chance to go back in time and change one thing, what would you change?"
	}, {
                "question": "What stands between you and happiness?"
	}, {
                "question": "If a doctor gave you one year to live, what would you try to accomplish?"
	}, {
                "question": "What do you like most about yourself?"
	}, {
                "question": "What do you have that you cannot live without?"
	}, {
                "question": "When you close your eyes what do you dream of?"
	}, {
                "question": "If you could as one person, dead or alive, one question, who would you ask and what would you ask?"
	}, {
                "question": "If your life was a movie, what would be the title?"
	}, {
                "question": "What does success mean to you?"
	}, {
                "question": "If you could ask for one wish, what would it be?"
	}, {
                "question": "What do you owe yourself?"
	}, {
                "question": "When you think of 'home' what do you think of?"
	}, {
                "question": "How could you describe yourself in 5 words?"
	}, {
                "question": "How do you spend most of your free time?"
	}, {
                "question": "What did you want to be when you where younger?"
	}, {
                "question": "What are you doing to pursue your dreams right now?"
	}, {
                "question": "What are you most scared of?"
	}, {
                "question": "What are you looking forward to?"
	}, {
                "question": "What has been the greatest adventure of your life?"
	}, {
                "question": "What are you most proud of?"
	}, {
                "question": "Where would you like to live? Why haven't you moved?"
	}, {
                "question": "If you left your current life in order to pursue your dreams, what would you lose?"
	}, {
                "question": "What is your greatest strength? What is your greatest weakness?"
	}, {
                "question": "What did life teach you yesterday?"
	}, {
                "question": "Whose life have you had the greatest impact on?"
	}, {
                "question": "What makes you special?"
	}, {
                "question": "What do you want most?"
	}, {
                "question": "How many people do you love? What are you doing for them?"
	}, {
                "question": "If you had 24 hours to live, who would you be with 23 hours from now?"
	}, {
                "question": "What bad habits do you want to break?"
	}, {
                "question": "When did you not speak up when you should have?"
	}, {
                "question": "How would you describe the next 5 years of your life in a sentence?"
	}];



    intFac.getQuestions = function () {
        return questions;
    };

    return intFac;
}])

.factory('favoriteFactory', ['$localStorage', function ($localStorage) {
    var favFac = {};
    var favorites = $localStorage.getObject('favorites', '[]');

    favFac.addToFavorites = function (index) {
        for (var i = 0; i < favorites.length; i++) {
            if (favorites[i].id == index)
                return;
        }
        favorites.push({
            id: index
        });
        $localStorage.storeObject('favorites', favorites);
    };

    favFac.deleteFromFavorites = function (index) {
        for (var i = 0; i < favorites.length; i++) {
            if (favorites[i].id == index) {
                favorites.splice(i, 1);
            }
        }
        $localStorage.storeObject('favorites', favorites);
    }

    favFac.getFavorites = function () {
        return favorites;
    };

    return favFac;


}])

.factory('$localStorage', ['$window', function ($window) {
    return {
        store: function (key, value) {
            $window.localStorage[key] = value;
        },
        get: function (key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        },
        storeObject: function (key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function (key, defaultValue) {
            return JSON.parse($window.localStorage[key] || defaultValue);
        }
    }
}])


;
