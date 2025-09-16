const body = document.body;
const toggles = document.querySelectorAll('.theme-toggle');

function applySystemTheme(e) {
  if (e.matches) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
applySystemTheme(prefersDark);
prefersDark.addEventListener('change', applySystemTheme);

function toggleTheme() {
  body.classList.toggle('dark');
}

toggles.forEach(toggle => {
  toggle.addEventListener('click', toggleTheme);
});

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = mobileMenu?.querySelector('.close-btn');

if (burger && mobileMenu && closeBtn) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    burger.setAttribute('aria-expanded', 'true');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
  });
}

const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const verses = [
  {
    text: "The Lord is my shepherd; I shall not want. — Psalm 23:1 (NKJV)",
    reflection: "This foundational verse reminds us that God provides for all our needs, both spiritual and physical. He is our ultimate provider and guide, leading us with care and ensuring we have everything we truly need to live a fulfilling life in His will. We can trust Him completely, knowing that He has our best interests at heart.",
  },
  {
    text: "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life. — John 3:16 (NKJV)",
    reflection: "This well-known verse encapsulates the core of the Gospel. It shows the incredible depth of God's love for humanity, a love so profound that He sacrificed His only Son, Jesus, to save us from eternal separation. By believing in Jesus, we are granted not just life, but life that never ends—a beautiful promise of a future with Him.",
  },
  {
    text: "I can do all things through Christ who strengthens me. — Philippians 4:13 (NKJV)",
    reflection: "This is a powerful declaration of reliance on Christ. It's not a boast of our own ability, but an acknowledgment that our strength comes directly from Him. No matter what challenges or difficulties we face, we can find the inner fortitude and power to overcome them by depending on Jesus to equip us for the task.",
  },
  {
    text: "Be strong and of good courage, do not fear nor be afraid of them; for the Lord your God, He is the One who goes with you. He will not leave you nor forsake you. — Deuteronomy 31:6 (NKJV)",
    reflection: "This verse is a profound source of comfort and encouragement. It directly addresses our fears and anxieties by reminding us that God is always present with us. We don't have to face any situation alone. His promise to never leave or abandon us gives us the courage to step out in faith, knowing we are under His watchful and protective care.",
  },
  {
    text: "Trust in the Lord with all your heart, and lean not on your own understanding; in all your ways acknowledge Him, and He shall direct your paths. — Proverbs 3:5-6 (NKJV)",
    reflection: "This calls us to a radical level of trust in God. It requires us to surrender our limited human understanding and fully rely on His wisdom, which is far greater than our own. When we acknowledge God's sovereignty and seek His guidance in every decision, He promises to make our path clear and lead us in the right direction.",
  },
  {
    text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with My righteous right hand. — Isaiah 41:10 (NKJV)",
    reflection: "This verse provides a profound sense of security. It gives us three key promises: God's presence, His help, and His support. When we feel overwhelmed or afraid, we can find peace in knowing that God is not only with us but is also actively working to strengthen and sustain us, holding us up with His power.",
  },
  {
    text: "But the fruit of the Spirit is love, joy, peace, longsuffering, kindness, goodness, faithfulness, gentleness, self-control. Against such there is no law. — Galatians 5:22-23 (NKJV)",
    reflection: "This is a beautiful description of the character that the Holy Spirit cultivates in a believer's life. These qualities are not something we can produce on our own, but rather a supernatural outflow of living a life surrendered to God. They are a sign of spiritual maturity and a testament to God's transformative power in our lives.",
  },
  {
    text: "In the beginning was the Word, and the Word was with God, and the Word was God. — John 1:1 (NKJV)",
    reflection: "This verse establishes the divine nature and eternal existence of Jesus Christ. The 'Word' refers to Jesus, showing that He was not created but has always existed as God. This truth is fundamental to Christian faith, highlighting Jesus’s unique position as both fully human and fully divine.",
  },
  {
    text: "Love suffers long and is kind; love does not envy; love does not parade itself, is not puffed up. — 1 Corinthians 13:4 (NKJV)",
    reflection: "This verse begins the famous 'love chapter' and provides a clear definition of what true, godly love looks like in action. It’s a love that is patient and enduring, a love that is selfless and humble, and a love that is more concerned with the well-being of others than with its own reputation. This is a powerful model for how we should treat others.",
  },
  {
    text: "Oh, give thanks to the Lord, for He is good! For His mercy endures forever. — Psalm 107:1 (NKJV)",
    reflection: "This verse is a call to a life of gratitude. We are encouraged to give thanks not just for our blessings, but because of God’s unchanging character. His goodness is an eternal truth, and His mercy—His compassion and forgiveness—is always available, providing a constant reason for praise and thankfulness.",
  },
  {
    text: "Through the Lord’s mercies we are not consumed, because His compassions fail not. They are new every morning; great is Your faithfulness. — Lamentations 3:22-23 (NKJV)",
    reflection: "This verse is a profound reminder of God's daily grace and faithfulness, even in the midst of suffering. His compassion is boundless and never runs out; it is fresh and available to us each new day. We can find hope and strength in knowing that God's unwavering faithfulness is a constant in our lives, no matter what we face.",
  },
  {
    text: "For where two or three are gathered together in My name, I am there in the midst of them. — Matthew 18:20 (NKJV)",
    reflection: "This is a powerful promise of Christ's presence with His people. It highlights the importance of Christian community and fellowship. When believers come together to worship, pray, or study in His name, Jesus is with them, strengthening their bond and making His presence known.",
  },
  {
    text: "Come to Me, all you who labor and are heavy laden, and I will give you rest. — Matthew 11:28 (NKJV)",
    reflection: "Jesus extends a beautiful and compassionate invitation to all who are tired, stressed, and burdened by the weight of life. He promises to provide true rest for our souls—a peace that goes beyond just physical rest. It’s a spiritual and emotional relief that comes from laying our burdens at His feet and trusting Him to carry them.",
  },
  {
    text: "Let all that you do be done with love. — 1 Corinthians 16:14 (NKJV)",
    reflection: "This simple yet profound command serves as a guiding principle for all of life. It reminds us that our primary motivation in every action—whether at work, with family, or in our community—should be love. When love is our foundation, our actions will honor God and truly benefit others.",
  },
  {
    text: "He has shown you, O man, what is good; and what does the Lord require of you but to do justly, to love mercy, and to walk humbly with your God? — Micah 6:8 (NKJV)",
    reflection: "This verse distills God’s requirements for humanity into three powerful actions. It's a call to live a life of integrity (doing justly), compassion (loving mercy), and humility (walking humbly with God). It teaches us that true faith is not about religious rituals, but about a transformed life that reflects God's character.",
  },
  {
    text: "For by grace you have been saved through faith, and that not of yourselves; it is the gift of God. — Ephesians 2:8 (NKJV)",
    reflection: "This verse clarifies that our salvation is not earned by our own efforts but is a free gift from God. It’s a testament to His grace, which is unmerited favor. The only thing required from us is faith—the trust and belief in what Jesus has done—and this faith itself is a gift from God. This removes all room for pride and emphasizes God's goodness.",
  },
  {
    text: "Jesus Christ is the same yesterday, today, and forever. — Hebrews 13:8 (NKJV)",
    reflection: "This verse is an anchor for our faith in a changing world. It reminds us that while everything around us may shift, God's character, promises, and love are constant and unwavering. We can find great security and stability in knowing that the Jesus who performed miracles and loved people in the Bible is the same one who is with us today and will be with us tomorrow.",
  },
  {
    text: "Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God. — Philippians 4:6 (NKJV)",
    reflection: "This is a practical guide for dealing with worry. Instead of allowing anxiety to consume us, we are called to bring our concerns to God in prayer. The key is to do this with a heart of gratitude, trusting that God is in control and knows what's best. When we do this, the verse promises a peace that surpasses all understanding.",
  },
  {
    text: "The Lord bless you and keep you; the Lord make His face shine upon you, and be gracious to you; the Lord lift up His countenance upon you, and give you peace. — Numbers 6:24-26 (NKJV)",
    reflection: "This is a traditional priestly blessing, a powerful expression of God’s desire to bless and protect His people. It is a prayer for His divine presence, favor, and peace in our lives. This blessing reminds us that God is a good Father who wants to pour out His goodness on us and grant us a deep sense of peace.",
  },
  {
    text: "And we know that all things work together for good to those who love God, to those who are the called according to His purpose. — Romans 8:28 (NKJV)",
    reflection: "This verse offers a profound perspective on suffering. It does not promise that bad things won't happen, but that God will use every circumstance—the good and the bad—for our ultimate benefit. For those who love Him, even the most difficult trials can be redeemed and used to shape us and fulfill His good purpose in our lives.",
  },
  {
    text: "For where your treasure is, there your heart will be also. — Matthew 6:21 (NKJV)",
    reflection: "This is a direct and penetrating truth from Jesus. It challenges us to examine our priorities. What we spend our time, money, and energy on reveals what we truly value. This verse encourages us to invest in things that are eternal and of lasting value, which in turn directs our hearts toward God and His kingdom.",
  },
  {
    text: "As a man thinks in his heart, so is he. — Proverbs 23:7 (NKJV)",
    reflection: "This verse highlights the immense power of our thoughts. Our inner world—what we believe and think about—ultimately shapes our character and actions. It’s a call to be intentional about what we allow into our minds and to cultivate thoughts that are true, noble, and pure, as they will define who we become.",
  },
  {
    text: "For with God nothing will be impossible. — Luke 1:37 (NKJV)",
    reflection: "This short but powerful verse is a cornerstone of faith. It was spoken by the angel Gabriel to Mary, assuring her that God could do the impossible (have a son as a virgin). It serves as a universal promise that no situation, no matter how difficult or hopeless it seems, is too great for God to handle. With Him, every possibility exists.",
  },
  {
    text: "The Lord is my light and my salvation; whom shall I fear? The Lord is the strength of my life; of whom shall I be afraid? — Psalm 27:1 (NKJV)",
    reflection: "This verse beautifully expresses unwavering confidence in God. When God is our light, He reveals the truth and guides our way. When He is our salvation and our strength, there is no person or circumstance that can cause us to fear. Our security is not in our own abilities but in His power and protection.",
  },
  {
    text: "There is therefore now no condemnation to those who are in Christ Jesus. — Romans 8:1 (NKJV)",
    reflection: "This is a glorious declaration of freedom for those who are in Christ. It means that because of Jesus's sacrifice, we are no longer under the legal and spiritual penalty of sin. The guilt and shame we once carried are gone, replaced by the full forgiveness and acceptance of God. This truth allows us to live with a clear conscience and in perfect peace with God.",
  },
  {
    text: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord. — Romans 6:23 (NKJV)",
    reflection: "This verse clearly defines the consequence of sin (spiritual death) and contrasts it with the glorious reality of God's gift. It shows that eternal life is not a wage we earn but a free, unmerited gift given to us through Jesus. It highlights the vast difference between trying to earn our way to God and simply receiving His generous love and grace.",
  },
  {
    text: "The Lord is a refuge for the oppressed, a refuge in times of trouble. — Psalm 9:9 (NKJV)",
    reflection: "This verse provides a powerful image of God as our safe haven. When we are facing persecution, injustice, or any kind of trouble, we can run to Him and find safety and protection. He is a secure shelter where we can find peace and comfort, knowing He will defend us and be our strength.",
  },
  {
    text: "Above all, keep fervent in your love for one another, because love covers a multitude of sins. — 1 Peter 4:8 (NKJV)",
    reflection: "This verse elevates love as the most important command. It teaches us that sincere, deep love for others has a redemptive quality. When we love generously and unconditionally, we are more likely to forgive and overlook the faults and mistakes of others, just as Christ has forgiven ours. This is a call to a love that is active and forgiving.",
  },
  {
    text: "Behold, I stand at the door and knock. If anyone hears My voice and opens the door, I will come in to him and dine with him, and he with Me. — Revelation 3:20 (NKJV)",
    reflection: "This verse presents Jesus as a persistent and gentle friend, patiently waiting for us to welcome Him into our lives. He doesn't force His way in, but He stands and knocks, offering the promise of a deep and personal relationship. The invitation is for us to simply open the door of our hearts and let Him in.",
  },
  {
    text: "Your word is a lamp to my feet and a light to my path. — Psalm 119:105 (NKJV)",
    reflection: "This verse highlights the essential role of the Bible in our lives. God's Word is not just a book; it is a source of divine guidance. It provides the light we need to navigate the uncertainties and darkness of this world, showing us the right way to live and revealing the path God has for us.",
  },
  {
    text: "And He said to me, “My grace is sufficient for you, for My strength is made perfect in weakness.” — 2 Corinthians 12:9 (NKJV)",
    reflection: "This verse is a profound paradox. It teaches us that our weaknesses are not a barrier to God's work, but an opportunity for His power to be demonstrated. When we are at our weakest and most dependent, God's grace—His unmerited favor—is all we need. In these moments, His strength shines through us, making us more effective than we could ever be on our own.",
  },
  {
    text: "God is our refuge and strength, a very present help in trouble. — Psalm 46:1 (NKJV)",
    reflection: "This verse assures us that God is an ever-present source of help. He is not a distant, passive observer but an active participant in our lives. When we are in trouble, He is a fortress we can run to for protection and a source of inner strength to face our challenges. We never have to wait long for Him; He is right there, ready to help.",
  },
  {
    text: "But seek first the kingdom of God and His righteousness, and all these things shall be added to you. — Matthew 6:33 (NKJV)",
    reflection: "This verse is a call to prioritize our relationship with God above all else. When we make seeking His kingdom and His character our primary goal, we can trust that He will provide for our every need. It's a promise of divine provision that comes from putting God first, relieving us of the anxiety that comes from worrying about our physical needs.",
  },
  {
    text: "The Lord is good, a stronghold in the day of trouble; and He knows those who trust in Him. — Nahum 1:7 (NKJV)",
    reflection: "This verse beautifully describes two aspects of God's character: His goodness and His protection. He is a safe place to turn to when we are in distress. More than that, He knows and cares deeply for those who place their trust in Him. This personal knowledge gives us comfort, as it means we are not just a number, but someone He intimately knows and protects.",
  },
  {
    text: "Trust in Him at all times, you people; pour out your heart before Him; God is a refuge for us. — Psalm 62:8 (NKJV)",
    reflection: "This verse encourages a life of complete and open communication with God. It gives us permission to be fully transparent with Him, pouring out our innermost thoughts and feelings without fear. It reiterates that God is our safe place, a sanctuary where we can be vulnerable and find solace, knowing we are in the presence of a loving and understanding Father.",
  },
  {
    text: "For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope. — Jeremiah 29:11 (NKJV)",
    reflection: "This famous verse provides a powerful promise of God's good intentions for our lives. It reminds us that His plans for us are for our ultimate well-being and are filled with peace, not harm. It gives us hope, even in difficult times, because we know that our future is secure in the hands of a God who is working for our good.",
  },
  {
    text: "A new commandment I give to you, that you love one another; as I have loved you, that you also love one another. — John 13:34 (NKJV)",
    reflection: "Jesus gives a new, powerful command that is the mark of a true disciple. It is not just to love, but to love in the same way that He loved us—selflessly, sacrificially, and unconditionally. This kind of love is a tangible representation of Christ in the world and is what identifies us as His followers.",
  },
  {
    text: "But without faith it is impossible to please Him, for he who comes to God must believe that He is, and that He is a rewarder of those who diligently seek Him. — Hebrews 11:6 (NKJV)",
    reflection: "This verse makes it clear that faith is the foundation of our relationship with God. It requires two things: believing that God exists and believing that He is good and will bless those who earnestly seek Him. This faith is not a blind leap, but a confident trust in God's character, which motivates us to pursue Him and His will.",
  },
  {
    text: "I am the way, the truth, and the life. No one comes to the Father except through Me. — John 14:6 (NKJV)",
    reflection: "This is one of the most exclusive and profound statements made by Jesus. He declares Himself to be the one and only path to a relationship with God the Father. This verse clarifies that salvation and true life are found only in Him. He is the ultimate reality and the source of all spiritual life.",
  },
  {
    text: "So then faith comes by hearing, and hearing by the word of God. — Romans 10:17 (NKJV)",
    reflection: "This verse explains how our faith grows and is strengthened. It is not something we can force or conjure up on our own; it is a result of hearing and engaging with God's Word. The more we listen to and read the Scriptures, the more our faith in God and His promises will increase.",
  },
  {
    text: "For all have sinned and fall short of the glory of God. — Romans 3:23 (NKJV)",
    reflection: "This verse provides the sobering truth of humanity's universal need for a Savior. It reminds us that no one is perfect or good enough to earn a place in heaven. Every person falls short of God's perfect standard. This truth sets the stage for the good news of Jesus, who came to bridge the gap created by our sin.",
  },
  {
    text: "Create in me a clean heart, O God, and renew a steadfast spirit within me. — Psalm 51:10 (NKJV)",
    reflection: "This is a sincere prayer for spiritual renewal. It acknowledges our need for God's cleansing and transformative power. We ask God to change us from the inside out, replacing our brokenness with a heart that is pure and a spirit that is firm and unwavering in its commitment to Him.",
  },
  {
    text: "And let the peace of God rule in your hearts, to which also you were called in one body; and be thankful. — Colossians 3:15 (NKJV)",
    reflection: "This verse calls us to allow God's peace to be the final authority in our lives. It’s a peace that should guide our decisions, resolve our conflicts, and settle our anxieties. This peace is a gift from God and should be a hallmark of the Christian community, which is called to live in unity with one another.",
  },
  {
    text: "And be kind to one another, tenderhearted, forgiving one another, even as God in Christ forgave you. — Ephesians 4:32 (NKJV)",
    reflection: "This verse provides a clear blueprint for how to interact with others. Our kindness, compassion, and forgiveness should be a direct reflection of the kindness, compassion, and forgiveness we have received from God through Jesus. It's a call to let our gratitude for His forgiveness fuel our relationships with others.",
  },
  {
    text: "The thief does not come except to steal, and to kill, and to destroy. I have come that they may have life, and that they may have it more abundantly. — John 10:10 (NKJV)",
    reflection: "Jesus presents a stark contrast between His purpose and the enemy's. The enemy's goal is to bring death and destruction, but Jesus's purpose is to bring us a life that is rich and full. This 'abundant life' is not just about material blessings but is a life filled with purpose, joy, and peace that only He can provide.",
  },
  {
    text: "But those who wait on the Lord shall renew their strength; they shall mount up with wings like eagles, they shall run and not be weary, they shall walk and not faint. — Isaiah 40:31 (NKJV)",
    reflection: "This verse is a beautiful promise to those who patiently and expectantly rely on God. Waiting on the Lord is not passive, but an active, hopeful trust. When we do, He gives us supernatural strength to overcome our weariness, to soar above our challenges, and to endure without giving up.",
  },
  {
    text: "For I am persuaded that neither death nor life, nor angels nor principalities nor powers, nor things present nor things to come, nor height nor depth, nor any other created thing, shall be able to separate us from the love of God which is in Christ Jesus our Lord. — Romans 8:38-39 (NKJV)",
    reflection: "This is a breathtaking declaration of the security of our salvation. It proclaims that nothing—no power, no event, and no circumstance—can ever sever our connection to God's love. This love is anchored in Jesus, and because of Him, we are eternally secure in God's grip, free from all fear of separation.",
  },
  {
    text: "Do not be conformed to this world, but be transformed by the renewing of your mind. — Romans 12:2 (NKJV)",
    reflection: "This verse is a call to intentional spiritual growth. It warns us against being shaped by the values and thinking of the world and instead urges us to allow God to transform us from the inside out. This transformation happens as we actively renew our minds with God's truth, leading to a life that honors Him.",
  },
  {
    text: "And my God shall supply all your need according to His riches in glory by Christ Jesus. — Philippians 4:19 (NKJV)",
    reflection: "This is a wonderful promise of God's provision. It assures us that our needs—whether financial, emotional, or spiritual—will be met. The source of this provision is not limited by our circumstances but by God's infinite riches in glory. Because of Jesus, we have access to a supply that is abundant and unlimited.",
  },
  {
    text: "Now faith is the substance of things hoped for, the evidence of things not seen. — Hebrews 11:1 (NKJV)",
    reflection: "This is a classic definition of faith. It’s not just a feeling, but a deep-seated assurance that what we hope for is real and what we don't yet see is true. Faith gives substance and reality to the promises of God, allowing us to live with confidence and conviction even when we can't see the full picture.",
  },

  // 51–100
  {
    text: "Rejoice in the Lord always. Again I will say, rejoice! — Philippians 4:4 (NKJV)",
    reflection: "This verse encourages believers to cultivate a continual attitude of joy regardless of circumstances. Joy in the Lord is rooted in our relationship with Him, not our external situation, and brings peace and strength to our hearts.",
  },
  {
    text: "Cast all your anxiety on Him because He cares for you. — 1 Peter 5:7 (NKJV)",
    reflection: "This verse teaches that we are invited to release our worries to God, trusting that He genuinely cares for us. It encourages a deep sense of relief and peace in God’s faithful care.",
  },
  {
    text: "He heals the brokenhearted and binds up their wounds. — Psalm 147:3 (NKJV)",
    reflection: "God is tender and compassionate. This verse reminds us that He is actively involved in healing emotional pain and restoring hope to those who are hurting.",
  },
  {
    text: "Blessed is the man who trusts in the Lord, and whose hope is the Lord. — Jeremiah 17:7 (NKJV)",
    reflection: "Trusting in God brings stability and blessing. When our hope is anchored in Him, we find resilience and joy that the world cannot take away.",
  },
  {
    text: "The Lord is near to all who call upon Him, to all who call upon Him in truth. — Psalm 145:18 (NKJV)",
    reflection: "God's nearness is assured to those who sincerely seek Him. Prayer connects us to His presence and power in a personal and meaningful way.",
  },
  {
    text: "Commit your works to the Lord, and your thoughts will be established. — Proverbs 16:3 (NKJV)",
    reflection: "This verse teaches that surrendering our plans and efforts to God brings guidance and stability. When we align our work with His will, our actions bear lasting fruit.",
  },
  {
    text: "The name of the Lord is a strong tower; the righteous run to it and are safe. — Proverbs 18:10 (NKJV)",
    reflection: "God is a refuge and protector. This verse reassures us that turning to Him provides safety and security in the face of life’s challenges.",
  },
  {
    text: "The Lord will fight for you, and you shall hold your peace. — Exodus 14:14 (NKJV)",
    reflection: "We are invited to trust God in our battles. Rather than striving in our own strength, we can rest knowing He is our defender.",
  },
  {
    text: "Your word is truth. — John 17:17 (NKJV)",
    reflection: "God's Word is reliable and trustworthy. It provides a firm foundation for our beliefs and guidance for our daily lives.",
  },
  {
    text: "Delight yourself also in the Lord, and He shall give you the desires of your heart. — Psalm 37:4 (NKJV)",
    reflection: "Finding joy and satisfaction in God aligns our desires with His will, leading to fulfillment and blessing.",
  },
  {
    text: "The Lord is my rock and my fortress and my deliverer. — Psalm 18:2 (NKJV)",
    reflection: "God is dependable and strong. He is a reliable source of protection and salvation in every area of our lives.",
  },
  {
    text: "I have been young, and now am old; yet I have not seen the righteous forsaken. — Psalm 37:25 (NKJV)",
    reflection: "This verse highlights God’s faithfulness to those who live righteously. We can trust that He never abandons His children.",
  },
  {
    text: "The Lord is righteous in all His ways and holy in all His works. — Psalm 145:17 (NKJV)",
    reflection: "God’s justice and holiness are perfect. We can trust in His decisions and ways even when they surpass our understanding.",
  },
  {
    text: "God is love. — 1 John 4:8 (NKJV)",
    reflection: "This simple yet profound statement reminds us of God’s essential nature. Love is at the core of everything He does, and it defines how we are to live in relationship with Him and others.",
  },
  {
    text: "Therefore encourage one another and build one another up, just as you are doing. — 1 Thessalonians 5:11 (NKJV)",
    reflection: "We are called to strengthen and uplift each other. Encouragement fosters unity, hope, and spiritual growth within the community of believers.",
  },
  {
    text: "Draw near to God and He will draw near to you. — James 4:8 (NKJV)",
    reflection: "Intimacy with God begins with our initiative. When we seek Him sincerely, He promises to meet us with His presence and love.",
  },
  {
    text: "Pray without ceasing. — 1 Thessalonians 5:17 (NKJV)",
    reflection: "A life of continual communication with God deepens our faith and reliance on Him. Prayer becomes a constant rhythm, shaping our decisions and character.",
  },
  {
    text: "Be holy, for I am holy. — 1 Peter 1:16 (NKJV)",
    reflection: "God calls us to reflect His character. Holiness involves living in obedience to Him and setting ourselves apart from sin and worldly values.",
  },
  {
    text: "Let your light so shine before men, that they may see your good works and glorify your Father in heaven. — Matthew 5:16 (NKJV)",
    reflection: "Our actions have eternal impact. When we live righteously, others are drawn to God and His glory through the witness of our lives.",
  },
  {
    text: "Therefore, my beloved brethren, be steadfast, immovable, always abounding in the work of the Lord. — 1 Corinthians 15:58 (NKJV)",
    reflection: "This verse reminds us to persevere in faith and service. Steadfastness ensures that our labor for God is meaningful and productive.",
  },
  {
    text: "God is our refuge and strength, a very present help in trouble. — Psalm 46:1 (NKJV)",
    reflection: "In times of crisis, God is an immediate source of support and protection. We can rely on His presence to navigate difficulties.",
  },
  {
    text: "The Lord will perfect that which concerns me. — Psalm 138:8 (NKJV)",
    reflection: "God works out all things according to His divine plan. We can trust Him to complete what He has started in our lives.",
  },
  {
    text: "For God gave us a spirit not of fear but of power and love and self-control. — 2 Timothy 1:7 (NKJV)",
    reflection: "God equips us with strength, love, and discipline. Fear is not from Him, so we can face challenges boldly and confidently.",
  },
  {
    text: "Cast your bread upon the waters, for you will find it after many days. — Ecclesiastes 11:1 (NKJV)",
    reflection: "Generosity and kindness are never wasted. What we sow in faith will yield returns, often in unexpected ways.",
  },
  {
    text: "Blessed are the peacemakers, for they shall be called sons of God. — Matthew 5:9 (NKJV)",
    reflection: "Peacemakers reflect God’s character and are honored as His children. Pursuing reconciliation and harmony brings God’s blessing.",
  },
  {
    text: "Your words were found, and I ate them, and Your word was to me the joy and rejoicing of my heart. — Jeremiah 15:16 (NKJV)",
    reflection: "God’s Word nourishes the soul. Immersing ourselves in Scripture brings joy, guidance, and spiritual fulfillment.",
  },
  {
    text: "Trust in the Lord forever, for in God the Lord, we have an everlasting rock. — Isaiah 26:4 (NKJV)",
    reflection: "God is unchanging and reliable. Placing our trust in Him ensures stability and security in all circumstances.",
  },
  {
    text: "And whatever you do, do it heartily, as to the Lord and not to men. — Colossians 3:23 (NKJV)",
    reflection: "Our work and service should be done for God’s glory, not human approval. This perspective brings purpose and excellence to every task.",
  },
  {
    text: "He who dwells in the secret place of the Most High shall abide under the shadow of the Almighty. — Psalm 91:1 (NKJV)",
    reflection: "Intimacy with God offers protection and rest. Dwelling in His presence shields us from spiritual harm and provides peace.",
  },
  {
    text: "The Lord will fight for you, and you shall hold your peace. — Exodus 14:14 (NKJV)",
    reflection: "We are called to trust God in our battles. He is our defender, and we can rest knowing He is in control.",
  },
  {
    text: "The Lord is my strength and my song; He has become my salvation. — Psalm 118:14 (NKJV)",
    reflection: "God empowers and redeems us. He is the source of our strength and the reason for our joy and gratitude.",
  },
  {
    text: "He has made everything beautiful in its time. — Ecclesiastes 3:11 (NKJV)",
    reflection: "God’s timing is perfect. Even when we don’t understand, His plan brings ultimate beauty and purpose.",
  },
  {
    text: "For we walk by faith, not by sight. — 2 Corinthians 5:7 (NKJV)",
    reflection: "Faith requires trust beyond what we can see. Believing in God’s promises guides us even when circumstances are unclear.",
  },
  {
    text: "Be still, and know that I am God. — Psalm 46:10 (NKJV)",
    reflection: "Quietness before God fosters trust and awareness of His sovereignty. In stillness, we recognize His power and presence.",
  }
];

function loadDailyVerse() {
  const today = new Date();
  const index = today.getDate() % verses.length;
  const verseEl = document.getElementById("daily-verse");
  const reflectionEl = document.getElementById("daily-reflection");
  
  if (verseEl && reflectionEl) {
    verseEl.textContent = `"${verses[index].text}"`;
    reflectionEl.textContent = verses[index].reflection;
  }
}

document.addEventListener("DOMContentLoaded", loadDailyVerse);

document.querySelectorAll('.story-dropdown').forEach(dropdown => {
  const summary = dropdown.querySelector('.story-summary');
  const content = dropdown.querySelector('.story-content');
  
  summary.addEventListener('click', e => {
    e.preventDefault();
    
    const isOpen = dropdown.hasAttribute('open');
    
    if (!isOpen) {
      dropdown.setAttribute('open', '');
      content.style.height = '0px';
      content.style.paddingBottom = '0px';
      
      requestAnimationFrame(() => {
        content.style.height = content.scrollHeight + 'px';
        content.style.paddingBottom = '20px';
      });
      
      content.addEventListener('transitionend', function handler() {
        content.style.height = 'auto';
        content.removeEventListener('transitionend', handler);
      });
      
    } else {
      content.style.height = content.scrollHeight + 'px';
      content.style.paddingBottom = '20px';
      
      requestAnimationFrame(() => {
        content.style.height = '0px';
        content.style.paddingBottom = '0px';
      });
      
      content.addEventListener('transitionend', function handler() {
        dropdown.removeAttribute('open');
        content.removeEventListener('transitionend', handler);
      });
    }
  });
});
