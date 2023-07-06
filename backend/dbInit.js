import { loremIpsum } from "lorem-ipsum"

export default async (models) => {

    const areaModel = [
        {
            name: "Economy",
            number: 1,
            description: " A venture capital firm that invests in the economy focuses on supporting innovative startups and businesses that have the potential to drive economic growth. These investments often target companies operating in sectors such as technology, finance, manufacturing, and energy. The firm seeks out entrepreneurs with disruptive ideas or technologies that can create new markets, generate employment opportunities, and contribute to overall economic development. Investments in this area often involve funding early-stage startups, providing growth capital to expanding businesses, or participating in mergers and acquisitions."
        },
        {
            name: "Tourism",
            number: 2,
            description: " In the tourism sector, a venture capital firm seeks opportunities to invest in companies that are revolutionizing the travel and hospitality industry. This includes startups and businesses involved in travel technology, online booking platforms, accommodation services, destination management, and experience-based tourism. The firm looks for innovative solutions that enhance the travel experience, improve operational efficiency, and tap into emerging trends like sustainable tourism and personalized travel services. Investments in this area may support the development of new travel platforms, tourism infrastructure, or disruptive technologies that transform the way people explore and engage with the world."
        },
        {
            name: "Health",
            number: 3,
            description: " Investing in the health sector involves supporting startups and companies that are at the forefront of medical innovation, healthcare technology, and biotechnology. The venture capital firm seeks opportunities in areas such as digital health, telemedicine, medical devices, pharmaceuticals, and healthcare services. The focus is on investing in solutions that improve patient outcomes, enhance access to healthcare, lower costs, and address pressing challenges in the healthcare industry. Investments may target early-stage companies conducting groundbreaking research, developing cutting-edge medical technologies, or providing innovative healthcare services that have the potential to revolutionize the delivery of care."
        }
    ]

    const area0 = await models.Area.create(areaModel[0])
    const area1 = await models.Area.create(areaModel[1])
    const area2 = await models.Area.create(areaModel[2])

    const personModel = [
        {
            name: "John Smith",
            role: "Co-Founder and CEO",
            age: 40,
            description: "John Smith is a highly accomplished entrepreneur and visionary leader. With a proven track record of launching successful startups, he brings a wealth of experience to the venture. John's strategic thinking, deep industry knowledge, and ability to identify emerging trends make him an invaluable asset. As the CEO, he is responsible for setting the company's overall direction, driving growth, and fostering strategic partnerships.",
        },
        {
            name: "Jane Doe",
            role: "Chief Technology Officer",
            age: 35,
            description: "Jane Doe is a tech-savvy innovator with a passion for leveraging technology to disrupt industries. With expertise in software development and cutting-edge technologies, she leads the company's technological initiatives. Jane's ability to translate ideas into scalable and user-friendly solutions is instrumental in developing innovative products and services. Her deep understanding of market trends and emerging technologies ensures the venture remains at the forefront of technological advancements.",
            
        },
        {
            name: "Sarah Thompson",
            role: "Chief Financial Officer",
            age: 45,
            description: "Sarah Thompson is a seasoned finance professional with a strong background in investment and financial analysis. As the CFO, she oversees financial strategy, fundraising efforts, and manages the company's financial operations. Sarah's expertise in financial modeling, risk assessment, and valuation plays a crucial role in driving profitability and attracting investors. Her meticulous attention to detail and strategic financial planning ensure the venture's financial stability and growth.",
            
        },
        {
            name: "Mark Johnson",
            role: "Chief Marketing Officer",
            age: 38,
            description: "Mark Johnson is a marketing and branding specialist known for his creative approach and deep understanding of consumer behavior. With a keen eye for market trends and a passion for building strong brands, he leads the company's marketing efforts. Mark's ability to craft compelling brand narratives, design effective marketing campaigns, and engage target customers ensures the venture's products and services resonate with the intended audience, driving customer acquisition and loyalty.",
            
        },
        {
            name: "Emily Chen",
            role: "Business Development Manager",
            age: 32,
            description: "Emily Chen is a highly motivated and results-driven professional with extensive experience in business development and strategic partnerships. Her vast network of industry contacts and strong negotiation skills make her instrumental in identifying growth opportunities and forging strategic alliances. Emily's ability to navigate complex business landscapes, build relationships, and create mutually beneficial partnerships fuels the venture's expansion and opens doors to new markets.",
            
        },
        {
            name: "David Rodriguez",
            role: "Chief Operations Officer",
            age: 42,
            description: "David Rodriguez is a seasoned operations expert with a knack for optimizing processes and maximizing efficiency. With a background in supply chain management, he ensures smooth operations and seamless execution of the venture's initiatives. David's keen eye for identifying bottlenecks, streamlining workflows, and implementing scalable systems ensures the venture operates at peak performance, delivering products and services with precision and speed.",
            
        },
        {
            name: "Lisa Williams",
            role: "Legal Counsel",
            age: 48,
            description: "Lisa Williams is a highly regarded legal professional specializing in corporate law and intellectual property. With her extensive experience and expertise, she protects the venture's legal interests and ensures compliance with regulatory requirements. Lisa's meticulous approach to legal matters, including contracts, patents, and trademarks, mitigates risks and safeguards the venture's assets. Her strategic guidance on legal issues allows the company to navigate complex legal landscapes with confidence.",
            
        },
        {
            name: "Michael Brown",
            role: "Head of Research and Development",
            age: 37,
            description: "Michael Brown is a research and development expert with a passion for innovation and a deep understanding of scientific advancements. With a strong background in product development, he leads the company's research efforts and drives the creation of cutting-edge technologies. Michael's ability to translate scientific concepts into practical applications, coupled with his strategic vision, enables the venture to stay ahead of the competition and develop groundbreaking products and solutions.",
            
         },
        {
            name: "Anna Nguyen",
            role: "Project manager",
            age: 28,
            description: "Anna Nguyen is a highly organized and detail-oriented project manager with a knack for overseeing complex initiatives. Her strong leadership skills and ability to coordinate cross-functional teams ensure the successful execution of the venture's projects. Anna's expertise in project planning, risk management, and resource alproject allows her to deliver projects on time and within budget, driving operational efficiency and achieving key milestones.",
            
        },
        {
            name: "Steven Lee",
            role: "Venture advisor",
            age: 35,
            description: "Steven Lee is a seasoned investor and advisor with extensive experience in the venture capital industry. With a wealth of knowledge in strategic planning, market analysis, and scaling strategies, he provides valuable guidance to the venture. Steven's ability to identify emerging trends, assess market potential, and offer strategic insights helps the company make informed decisions and navigate the challenges of rapid growth. His network and industry connections open doors to new opportunities and potential investors.",
            
        }
    ]
    
    const person0 = await models.person.create(personModel[0])
    const person1 = await models.person.create(personModel[1])
    const person2 = await models.person.create(personModel[2])
    const person3 = await models.person.create(personModel[3])
    const person4 = await models.person.create(personModel[4])
    const person5 = await models.person.create(personModel[5])
    const person6 = await models.person.create(personModel[6])
    const person7 = await models.person.create(personModel[7])
    const person8 = await models.person.create(personModel[8])
    const person9 = await models.person.create(personModel[9])

    const projectModel = [
        {
            name: "FinTech Revolution",
            field: "Economy",
            areaId: area0.id,
            personId : person0.id,
            description: "An early-stage startup is at the forefront of the financial technology revolution. Their cutting-edge platform disrupts traditional banking services by providing seamless digital banking solutions. Through advanced analytics and personalized financial management tools, they empower individuals and businesses to take control of their finances. By leveraging technology, they enhance accessibility, convenience, and efficiency in the financial industry, revolutionizing the way people manage their money.  With a strong focus on customer-centricity, the startup strives to enhance the user experience by offering intuitive interfaces and easy-to-use features that empower individuals and businesses to take control of their financial lives. Their platform not only enables secure and real-time transactions but also promotes financial literacy through educational resources and personalized recommendations.",
            most : 1,
            area_selection : 1
        },
        {
            name: "Clean Energy Innovators",
            field: "Economy ",
            areaId: area0.id,
            personId : person1.id,
            description: "A growth-stage company is committed to driving the clean energy transition. They focus on developing advanced solar panel technology and energy storage systems. Their innovations increase the efficiency and affordability of renewable energy, making it a viable and sustainable alternative to traditional energy sources. By reducing carbon emissions and dependence on fossil fuels, they contribute to a cleaner and more sustainable future. With a diverse team of engineers and researchers, they continuously refine their technologies, striving for breakthroughs that optimize energy production and storage capabilities. By collaborating with industry partners and policymakers, they actively advocate for clean energy policies and create a supportive ecosystem for widespread adoption of renewable energy solutions.",
            most : 0,
            area_selection : 1
        },
        {
            name: "Smart Manufacturing",
            field: "Economy ",
            areaId: area0.id,
            personId : person2.id,
            description: "A technology-driven startup combines artificial intelligence and automation to revolutionize manufacturing processes. Their innovative solutions optimize production lines, reduce waste, and improve overall efficiency. By leveraging AI algorithms, they enable predictive maintenance, enhance quality control, and streamline operations across industries ranging from automotive to electronics. Their smart manufacturing technologies lead to increased productivity, reduced costs, and improved competitiveness. Their AI-driven systems collect and analyze real-time data, enabling proactive decision-making and rapid problem-solving. By integrating automation into various stages of production, they achieve seamless coordination between humans and machines, enhancing safety and productivity on the factory floor.",
            most : 0,
            area_selection : 1
        },
        {
            name: "E-commerce Disruptor",
            field: "Economy ",
            areaId: area0.id,
            personId : person3.id,
            description: "A rapidly growing e-commerce platform is reshaping the way people shop online. They harness the power of AI and machine learning algorithms to personalize the entire online shopping experience. Through sophisticated data analysis and customer profiling, they deliver highly tailored product recommendations, personalized promotions, and seamless user interfaces. By enhancing customer satisfaction and engagement, they disrupt traditional retail models and set new standards for e-commerce. Their commitment to exceptional customer service extends beyond the digital realm, as they continuously innovate their last-mile delivery solutions to provide a seamless end-to-end shopping experience. With a vast network of trusted suppliers and partners, they offer an extensive range of products, giving customers unparalleled choice and variety.",
            most : 0,
            area_selection : 1
        },
        {
            name: "Supply Chain Optimization",
            field: "Economy ",
            areaId: area0.id,
            personId : person4.id,
            description: "A mature-stage company is revolutionizing supply chain management through blockchain technology. They have created a decentralized and transparent system that ensures secure and traceable transactions throughout the supply chain. By leveraging blockchain's immutable ledger and smart contracts, they eliminate intermediaries, reduce fraud, and enhance supply chain efficiency. Their solution fosters trust, facilitates real-time tracking, and minimizes operational inefficiencies, benefiting industries and businesses across the globe. With a strong commitment to sustainability, this supply chain optimization company prioritizes ethical sourcing and environmental responsibility. By integrating blockchain technology into their platform, they enable end-to-end visibility and accountability, promoting fair trade practices and ensuring the authenticity of products.",
            most : 1,
            area_selection : 1
        },
        {
            name: "Travel Experience Aggregator",
            field: "Tourism ",
            areaId: area1.id,
            personId : person5.id,
            description: "An early-stage startup aims to revolutionize the way people discover and book travel experiences. Their comprehensive online platform aggregates a wide range of unique and authentic experiences from local providers worldwide. They curate these experiences, ensuring high quality and diversity to cater to the varied interests of travelers. By providing a convenient one-stop-shop for booking, they simplify the travel planning process and offer a gateway to memorable and immersive travel experiences. Driven by a passion for exploration and cultural immersion, this startup goes beyond traditional tourist attractions, highlighting hidden gems and off-the-beaten-path experiences. Their platform fosters a direct connection between travelers and local communities, promoting sustainable tourism and supporting local economies.",
            most : 1,
            area_selection : 2
        },
        {
            name: "Sustainable Accommodation",
            field: "Tourism ",
            areaId: area1.id,
            personId : person6.id,
            description: "A growth-stage company is dedicated to developing eco-friendly accommodations in popular tourist destinations. They employ innovative construction techniques, sustainable materials, and renewable energy sources to create environmentally conscious hotels and resorts. By integrating sustainability into the core of their operations, they offer travelers the opportunity to experience luxury and comfort while minimizing their environmental impact. Their sustainable accommodations serve as beacons of responsible tourism and inspire others to follow suit. By engaging with local communities, they create employment opportunities and support social initiatives, fostering a positive impact on the surrounding environment and people. Through innovative design and green building practices, they aim to set new benchmarks for sustainable tourism and pave the way for a more harmonious relationship between travelers and the destinations they visit.",
            most : 0,
            area_selection : 2
        },
        {
            name: "Adventure Tourism Tech",
            field: "Tourism ",
            areaId: area1.id,
            personId : person7.id,
            description: "A technology startup caters to the needs of adventure enthusiasts by connecting them with local adventure tour operators through a user-friendly mobile app. Their platform offers seamless booking, real-time itinerary updates, and safety features that ensure adrenaline-fueled experiences are both thrilling and secure. By leveraging technology, they enhance the convenience and safety of adventure tourism, enabling travelers to embark on thrilling escapades with peace of mind. Through a gamified system, they incentivize exploration and reward users for their active engagement within the adventure travel community. By building this vibrant ecosystem, the startup not only enhances the travel experience but also creates a platform for knowledge sharing, inspiration, and camaraderie among adventure seekers worldwide.",
            most : 0,
            area_selection : 2
        },
        {
            name: "Virtual Travel Experiences",
            field: "Tourism ",
            areaId: area1.id,
            personId : person8.id,
            description: "A mature-stage company specializes in bringing travel experiences to individuals through virtual reality (VR) technology. Their immersive VR travel experiences allow people to explore iconic landmarks and destinations from the comfort of their homes. With stunning visuals, interactive elements, and informative narratives, they provide an accessible and engaging travel alternative. Their virtual travel experiences bridge the gap between physical travel limitations and the desire to explore the world, opening up new horizons for global connectivity. Committed to authenticity, this mature-stage company collaborates with local experts and guides to curate virtual travel experiences that capture the essence of each destination. Through live virtual tours, participants can interact with knowledgeable guides in real-time, ask questions, and engage in meaningful cultural exchanges.",
            most : 0,
            area_selection : 2
        },
        {
            name: "Destination Management Platform",
            field: "Tourism ",
            areaId: area1.id,
            personId : person9.id,
            description: "An innovative platform assists destination management organizations in optimizing tourism strategies and enhancing visitor experiences. By leveraging data analytics, AI algorithms, and personalized recommendations, they provide valuable insights to attract tourists, identify emerging trends, and tailor marketing campaigns. Their platform enables destinations to create personalized experiences, improve visitor satisfaction, and boost the overall economic impact of tourism. Through their comprehensive destination management tools, this innovative platform is driving the evolution of tourism strategies, enabling destinations to thrive while preserving their distinct character and contributing to the well-being of local communities.",
            most : 1,
            area_selection : 2
        },
        {
            name: "Telemedicine Platform",
            field: "Health ",
            areaId: area2.id,
            personId : person0.id,
            description: "This early-stage startup is developing a telemedicine platform that connects patients with healthcare providers. Their platform enables remote consultations, digital prescriptions, and remote monitoring, improving access to healthcare services, especially in underserved areas. By leveraging technology, they bridge the gap between patients and doctors, making healthcare more accessible, convenient, and efficient. Through their innovative telemedicine solution, this early-stage startup is transforming the healthcare landscape, improving healthcare access, and revolutionizing the way healthcare is delivered globally.",
            most : 1,
            area_selection : 3
        },
        {
            name: "Personalized Medicine Diagnostics",
            field: "Health ",
            areaId: area2.id,
            personId : person1.id,
            description: "This growth-stage company specializes in personalized diagnostic solutions. They leverage genetic testing and data analysis to provide tailored medical insights, helping doctors optimize treatments for individual patients. By incorporating genetic information, they enhance precision medicine, improving patient outcomes and transforming the way diseases are diagnosed and managed. With a focus on continuous innovation, this growth-stage company is at the forefront of advancing personalized medicine diagnostics. They actively collaborate with research institutions and medical professionals to expand their knowledge base and refine their diagnostic algorithms.",
            most : 0,
            area_selection : 3
        },
        {
            name: "AI-Driven Drug Discovery",
            field: "Health ",
            areaId: area2.id,
            personId : person2.id,
            description: "This technology-driven startup is revolutionizing the drug discovery process. They harness the power of artificial intelligence and machine learning algorithms to analyze vast amounts of data and identify potential drug candidates for various diseases. By accelerating the research and development of new medications, they aim to address unmet medical needs and improve the quality of life for patients worldwide. With a multidisciplinary team of scientists and data experts, this startup combines AI-driven algorithms with domain expertise to navigate the complexities of drug discovery. Their platform expedites the identification and optimization of promising drug candidates, significantly reducing the time and costs associated with traditional methods.",
            most : 0,
            area_selection : 3
        },
        {
            name: "Digital Mental Health",
            field: "Health ",
            areaId: area2.id,
            personId : person3.id,
            description: "This mature-stage company focuses on providing digital mental health solutions. They offer mobile apps and online therapy platforms that provide accessible and personalized mental health support. By leveraging technology, they break down barriers to accessing mental healthcare, offer convenient and confidential support, and empower individuals to prioritize their mental well-being. Their digital mental health solutions incorporate evidence-based therapies, mindfulness practices, and self-care tools to empower individuals in their mental health journeys. Through user-friendly interfaces and real-time support, they create a safe and inclusive space for individuals to connect with licensed professionals and peer support networks.",
            most : 0,
            area_selection : 3
        },
        {
            name: "Wearable Health Monitoring",
            field: "Health",
            areaId: area2.id,
            personId : person4.id,
            description: "This innovative company develops wearable devices that track and monitor vital signs. Their wearable technology enables individuals to proactively manage their health, detect anomalies, and share data with healthcare professionals for timely interventions. By empowering individuals to take control of their well-being, they promote preventive healthcare and facilitate early detection of health issues. Their advanced sensors and sophisticated algorithms enable real-time tracking of vital signs such as heart rate, sleep patterns, and activity levels. Through intuitive mobile apps and cloud-based platforms, individuals can access personalized insights, set goals, and track progress towards their health objectives.",
            most : 0,
            area_selection : 3
        }

    ]

    await models.project.bulkCreate(projectModel)
}

