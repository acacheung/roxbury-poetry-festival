import Link from 'next/link'
import Layout from '@components/Layout'

function ExternalLink({ children, href }) {
  return (
    <a
      className="underline"
      href={href}
      rel="noreferrer noopener"
      target="_blank"
    >
      {children}
    </a>
  )
}

const speakers = [
  {
    name: 'Ife Franklin',
    slug: 'ife-franklin',
    role: 'Artist',
    image: '/img/speakers/2026/ifefranklin.jpg',
    bio: (
      <>
        Ife Franklin&apos;s practice involves several genres of art-making
        inspired by slave narratives, dreams, dance, song, and visions. Over the
        last decade she has been developing The Indigo Project which honors the
        lives and history of formerly enslaved Africans/African-Americans who
        labored to produce materials that generated the wealth of nations. At
        the center are Franklin&apos;s Ancestor Slave Cabins which often
        incorporate Adire fabric, an indigo-dyed cotton cloth decorated using a
        resist technique from the Yoruba culture. These assemblages are built in
        collaboration with the community and cultivate connections that promote
        understanding and healing from the hard history of enslavement. In 2018
        Franklin published, <em>The Slave Narrative of Willie Mae</em>, a
        fictional account of Willie Mae Lenox&apos;s escape from slavery to
        freedom. The work was adapted into a short film in 2021.
      </>
    ),
  },
  {
    name: 'Stephen Hamilton',
    slug: 'stephen-hamilton',
    role: 'Artist and arts educator',
    image: '/img/speakers/2026/Stephen-Hamilton.jpg',
    bio: (
      <>
        Stephen Hamilton is an artist and arts educator living and working in
        Boston Massachusetts. Stephen&apos;s Work incorporates both Western and
        African techniques, blending figurative painting and drawing with resist
        dyeing, weaving, and woodcarving. Each image is a marriage between the
        aesthetic perspectives and artistry of both traditions. As a Black
        American trained in traditional west African artforms, he treats the
        acts of weaving, dyeing, and woodcarving as ritualized acts of
        reclamation. He uses traditional techniques and materials native to West
        Africa to reclaim ancestral knowledge dissociated from Africans in the
        Americas, during the transatlantic slave trade. The work explores and
        heavily references the Black body in pre-colonial African art history,
        creating visual connections between the past and the present. This forms
        a body of work, which serves as a conceptual and visual bridge between
        the ancient and modern worlds. Through this, he explores elements of
        black identity through time and space on its own terms.
      </>
    ),
  },
  {
    name: 'Amanda Gunn',
    slug: 'amanda-gunn',
    role: 'Poet',
    image: '/img/speakers/2026/Amanda+Gunn+Author+Photo+10.webp',
    bio: (
      <>
        Amanda Gunn grew up just at the edge of the woods in southern
        Connecticut with two older brothers. A former Wallace Stegner Fellow at
        Stanford, she is currently a doctoral candidate in English at Harvard
        where she studies modern and contemporary poetry, Black poetry and
        poetics, and post-WWII Black literature. She is the recipient of the
        Missouri Review Editor&apos;s Prize, the Auburn Witness Poetry Prize,
        and a Pushcart Prize, and has received additional fellowships from the
        Civitella Ranieri Foundation, the Rona Jaffe Foundation, the Bread Loaf
        Writers&apos; Conference, MacDowell, and the Kenyon Review Writers
        Workshop. Her recent work appears or is forthcoming in{' '}
        <em>Poetry</em>, <em>VQR</em>, <em>Ploughshares</em>, and{' '}
        <em>Doek!</em> Her debut collection,{' '}
        <em>Things I Didn&apos;t Do With This Body</em>, was published in 2023
        by Copper Canyon Press.
      </>
    ),
  },
  {
    name: 'Kes Maro',
    slug: 'kes-maro',
    role: 'Poet and visual artist',
    image: '/img/speakers/2026/kes maro.jpg',
    bio: (
      <>
        Kes Maro (they/he) is a queer poet and visual artist based in Brooklyn.
        They are a co-founder of the Mill City Writers Retreat and current MFA
        candidate at NYU. Their work has been nominated for a Pushcart Prize and
        can be found or is forthcoming in <em>____figuration: An Anthology of
        Trans Writers</em>, <em>the Portland Dirt</em>,{' '}
        <em>Passengers Journal</em>, <em>Blood+Honey</em>, and elsewhere. They
        were a member of the 2023 and 2024 Mill City Speaks slam team. You can
        find them on Instagram{' '}
        <ExternalLink href="https://www.instagram.com/kes.maro/">
          @kes.maro
        </ExternalLink>
        .
      </>
    ),
  },
  {
    name: 'Kayla Kennedy',
    slug: 'kayla-kennedy',
    role: 'Poet, author, actress, and behavior analyst',
    image: '/img/speakers/2026/Kayla kennedy .jpg',
    bio: (
      <>
        Kayla Kennedy is a behavior analyst, actress, poet, and author. As a
        BCBA, she works with families affected by autism and other social
        disabilities. As a poet she has competed on slam teams in Lowell and
        Cambridge including The Lizard Lounge and the Mill City Speaks Slam Team
        from 2023-2025. Her poetry has been featured across multiple venues
        throughout New England. She represented Slam Free or Die for the 2024
        Womxn of the World Poetry Slam in Baltimore and has conducted workshops
        in both college universities and local high schools. She is currently
        working on her debut speculative fiction novel.
      </>
    ),
  },
  {
    name: 'Eric Esteves',
    slug: 'eric-esteves',
    role: 'Connector, convener, and advocate',
    image: '/img/speakers/2026/Eric Pops Esteves.jpeg',
    bio: (
      <>
        Eric Esteves is a connector, convener, and advocate. His life mission is
        to connect people to resources and opportunities in order to transform
        their lives.
        <br />
        <br />
        Eric is the former Executive Director of the Lenny Zakim Fund and before
        that was the Director of the Social Innovation Fund at The Boston
        Foundation. He&apos;s also worked for Root Cause, Harvard Business
        School, Lesley University, the Boston Impact Initiative, and the Boston
        Public Schools. Eric received both his undergraduate degree in Business
        Administration and his graduate degree in Information Systems from
        Northeastern University.
      </>
    ),
  },
  {
    name: 'Quintin Collins',
    slug: 'quintin-collins',
    role: 'Writer and editor',
    image: '/img/speakers/2026/Collins, Quintin 2024 self-portrait (1).jpg',
    bio: (
      <>
        Quintin Collins is a writer, editor, and associate director of the
        Solstice MFA in Creative Writing Program. He is the author of{' '}
        <em>The Dandelion Speaks of Survival</em> and{' '}
        <em>Claim Tickets for Stolen People</em>, selected by Marcus Jackson as
        winner of The Journal&apos;s 2020 Charles B. Wheeler Prize.
        Quintin&apos;s other awards and accolades include a Pushcart Prize, a
        BCALA Literary Award honor, a Mass Cultural Council grant, the 2019
        Atlantis Award from the Poet&apos;s Billow, and Best of the Net
        nominations.
      </>
    ),
  },
  {
    name: 'Matthew E. Henry',
    slug: 'matthew-e-henry',
    role: 'Educator and writer',
    image: '/img/speakers/2026/MEH (d).jpg',
    bio: (
      <>
        Matthew E. Henry is an educator, essayist, occasional fiction writer,
        and author of seven poetry collections, most recently{' '}
        <em>Promises to Keep</em> (Wayfarer Books, 2026). Editor-in-chief of{' '}
        <em>The Weight Journal</em>, a poetry editor at{' '}
        <em>American Poetry Journal</em>, and creative nonfiction editor at{' '}
        <em>Porcupine Literary</em>, MEH&apos;s publications include{' '}
        <em>Barren Magazine</em>, <em>Had</em>,{' '}
        <em>Massachusetts Review</em>, <em>Mom Egg Review</em>,{' '}
        <em>The Pedestal Magazine</em>, <em>Ploughshares</em>,{' '}
        <em>Stone Circle Review</em>, <em>Terrain</em>, and{' '}
        <em>The Worcester Review</em>. MEH earned an MFA yet continued to spend
        money he didn&apos;t have completing an MA in theology and a PhD in
        education. He writes about education, race, religion, and burning
        oppressive systems to the ground at{' '}
        <ExternalLink href="https://www.MEHPoeting.com">
          www.MEHPoeting.com
        </ExternalLink>
        .
      </>
    ),
  },
  {
    name: 'Sarah Kersey',
    slug: 'sarah-kersey',
    role: 'Poet',
    image: '/img/speakers/2026/Kersey, Sarah.jpeg',
    bio: (
      <>
        Sarah Kersey is a poet and X-ray technologist. She is the author of the
        poetry chapbook <em>Residence Time</em>, which was published by Newfound
        in 2024. In 2025, it was named a finalist for the Eric Hoffer Book
        Award-Medal Provocateur. Their work has been published in{' '}
        <em>The Rumpus</em>, <em>Columbia Journal</em>,{' '}
        <em>The Account Magazine</em>, SWWIM, and elsewhere.
      </>
    ),
  },
  {
    name: 'Jill McDonough',
    slug: 'jill-mcdonough',
    role: 'Poet',
    image: '/img/speakers/2026/Jill McDonough .jpg',
    bio: (
      <>
        Jill McDonough&apos;s latest book is <em>American Treasure</em> (Alice
        James, 2022). The recipient of three Pushcart prizes and fellowships
        from the Lannan Foundation, the National Endowment for the Arts, the Fine
        Arts Work Center, the New York Public Library, the Library of Congress,
        and Stanford&apos;s Stegner program, she directs the MFA program at UMass
        Boston.
      </>
    ),
  },
  {
    name: 'Emmanuel Oppong-Yeboah',
    slug: 'emmanuel-oppong-yeboah',
    role: 'Poet, editor, and educator',
    image: '/img/speakers/2026/emmanuel oppong yeboah.jpg',
    bio: (
      <>
        Emmanuel Oppong-Yeboah is a Ghanaian American poet, editor, and educator
        living out the diaspora in Boston, Massachusetts. They are both Black &
        alive.
        <br />
        <br />
        Born in 1993, Emmanuel is the school librarian at the Joseph Lee School
        in Dorchester, and Boston&apos;s current poet laureate. They are the
        author of <em>Not Without Small Joys</em>.
      </>
    ),
  },
  {
    name: 'Perpetua Cannistraro',
    slug: 'perpetua-cannistraro',
    role: 'Publicist',
    image: '/img/speakers/2026/Perpetua headshot 2026.JPG',
    bio: (
      <>
        Perpetua Cannistraro has worked as a publicist at Beacon Press for over
        a decade. She promotes titles from a wide variety of subjects, including
        American history, race and culture, progressive education & religion,
        memoir, and poetry. When she&apos;s not reading for work, she enjoys pop
        culture or historical nonfiction, genre fiction, and spiritual reading.
        Perpetua also sings, writes, loves movies and TV, and she loves to get
        on her husband&apos;s nerves in Roxbury.
      </>
    ),
  },
  {
    name: 'Jenny Molberg',
    slug: 'jenny-molberg',
    role: 'Poet and editor',
    image: '/img/speakers/2026/Jenny-Molberg_Headshot.jpg',
    bio: (
      <>
        Jenny Molberg is the author of three poetry collections:{' '}
        <em>Marvels of the Invisible</em> (Tupelo Press, 2017), winner of the
        Berkshire Prize; <em>Refusal</em> (LSU Press, 2020); and{' '}
        <em>The Court of No Record</em> (LSU Press, 2023), a finalist for the
        Los Angeles Times Book Prize. She edited the Unsung Masters volume{' '}
        <em>Adelaide Crapsey: On the Life and Work of an American Master</em>,
        and her poems and essays have appeared or are forthcoming in{' '}
        <em>Ploughshares</em>, <em>The American Poetry Review</em>,{' '}
        <em>AGNI</em>, <em>The Kenyon Review</em>,{' '}
        <em>The Missouri Review</em>, and elsewhere. Molberg has received
        fellowships and residencies from the National Endowment for the Arts,
        the Virginia Center for the Creative Arts, the Hambidge Center, the
        Sewanee Writers&apos; Conference, the Vermont Studio Center, and the
        Longleaf Writers Conference. Formerly Professor of Creative Writing at
        the University of Central Missouri, where she directed Pleiades Press
        and edited <em>Pleiades: Literature in Context</em>, she is now
        Professor of Writing, Literature, and Publishing and Editor-in-Chief of{' '}
        <em>Ploughshares</em> at Emerson College.
      </>
    ),
  },
  {
    name: 'Tatiana Johnson-Boria',
    slug: 'tatiana-johnson-boria',
    role: 'Writer, educator, and multidisciplinary artist',
    image: '/img/speakers/2026/Tatiana.jpg',
    bio: (
      <>
        Tatiana Johnson-Boria is a writer, educator, and multidisciplinary
        artist whose work explores trauma, healing, race, identity, and the
        complex magic of mothering. She is the author of{' '}
        <em>Nocturne in Joy</em> (Sundress Publications, 2023), winner of the
        2024 Julia Ward Howe Book Prize in Poetry.
        <br />
        <br />
        Tatiana is an award-winning writer and recipient of fellowships and
        grants from Tin House, the Massachusetts Cultural Council, MacDowell, the
        Brother Thomas Fellowship, and the St. Botolph Club Foundation, among
        others. She&apos;s the winner of the Matt Clark Poetry Prize at{' '}
        <em>New Delta Review</em> (2021) and her work has been nominated for a
        Pushcart Prize and Best of the Net recognition. Tatiana has also been
        named a finalist for the Philip Levine Prize for Poetry at Anhinga
        Press, the Black Warrior Review Poetry Prize, The Southern Humanities
        Review Auburn Witness Prize, and the 92Y Discovery Contest. Her work
        appears or is forthcoming in The Academy of American Poets,{' '}
        <em>Ploughshares</em>, <em>Kenyon Review</em>,{' '}
        <em>The Cincinnati Review</em>, <em>Transition Magazine</em>, and many
        other publications. She is represented by Lauren Scovel at Laura Gross
        Literary.
      </>
    ),
  },
  {
    name: 'Maria Pinto',
    slug: 'maria-pinto',
    role: 'Author and educator',
    image: '/img/speakers/2026/Maria Pinto VSC.jpg',
    bio: (
      <>
        Maria Pinto is a Jamaican-American author and educator living in the
        Boston area. She teaches for various arts organizations, and her work
        has appeared in <em>Orion Magazine</em>, <em>Literary Hub</em>,{' '}
        <em>Longreads</em>, and <em>Science</em>, among other publications. She
        leads workshops and gives lectures for mushroom clubs and environmental
        groups around the country, and leads regular fungal forays at
        Harvard&apos;s Arnold Arboretum. Her book of essays inspired by
        mushrooms,{' '}
        <em>
          Fearless, Sleepless, Deathless: What Fungi Taught Me about
          Nourishment, Poison, Ecology, Hidden Histories, Zombies, and Black
          Survival
        </em>
        , published by Great Circle Books, was shortlisted for the 2026 OCM
        Bocas Prize for Caribbean Literature.
      </>
    ),
  },
  {
    name: 'George Abraham',
    slug: 'george-abraham',
    role: 'Poet, essayist, critic, and performance artist',
    image: '/img/speakers/2026/George Abraham.jpg',
    bio: (
      <>
        George Abraham (he/they) is a Palestinian American poet, essayist,
        critic, performance artist. They are the author of{' '}
        <em>When the Arab Apocalypse Comes to America</em> (Haymarket, 2027)
        and <em>Birthright</em> (Button Poetry, 2020), which won the Arab
        American Book Award and was a Lambda Literary Award finalist. They are
        the editor at large of <em>Mizna</em> and coeditor of{' '}
        <em>Heaven Looks Like Us: Palestinian Poetry</em> (Haymarket, 2025),
        which was long-listed for the Palestine Book Award.
      </>
    ),
  },
  {
    name: 'Mejdulene Bernard Shomali',
    slug: 'mejdulene-bernard-shomali',
    role: 'Poet and professor',
    image: '/img/speakers/2026/Mejdulene Bernard Shomali .jpg',
    bio: (
      <>
        Mejdulene Bernard Shomali (she/her) is a queer Palestinian poet and associate
        professor of Women&apos;s, Gender, and Sexuality Studies at Williams
        College. She is the author of{' '}
        <em>Between Banat: Queer Arab Critique and Transnational Arab Archives</em>{' '}
        and the poetry chapbook{' '}
        <em>agriculture of grief: prayers for my father&apos;s dementia</em>.
      </>
    ),
  },
  {
    name: 'Hannah Moushabeck',
    slug: 'hannah-moushabeck',
    role: 'Book worker and publisher',
    image: '/img/speakers/2026/Hannah-Moushabeck-Headshot-731x1024.jpg',
    bio: (
      <>
        Hannah Moushabeck (she/her) is a Palestinian-American book worker who
        was raised in a family of publishers and booksellers. Hannah has worked
        in publishing for over a decade and now runs Interlink Publishing, the
        only Palestinian-owned publisher in the United States, alongside her
        family. Her debut picture book,{' '}
        <em>Homeland: My Father Dreams of Palestine</em> (Chronicle Books,
        2023), won the New England Book Award and the Arab American Book Award.
      </>
    ),
  },
  {
    name: 'Jeneé Osterheldt',
    slug: 'jenee-osterheldt',
    role: 'Culture columnist',
    image: '/img/speakers/2026/Jeneé Osterheldt (1).JPEG',
    bio: (
      <>
        Jeneé Osterheldt is a culture columnist who covers identity and social
        justice through the lens of culture and the arts. Her work centers Black
        lives and the lives of people of color. She is also the creator of{' '}
        <em>A Beautiful Resistance</em>, a multimedia platform and docuseries
        for <em>The Boston Globe</em> that centers Black voices and celebrates
        Black Joy.
        <br />
        <br />
        The work is both joy and justice. Sometimes this means taking systemic
        racism, sexism, and oppression to task. Other times it means arts, joy,
        and space-making. It always means Black lives matter.
        <br />
        <br />
        Beyond writing and film, her work comes to life on stage and screen as
        she moderates conversations with thought leaders and culture makers like
        Ghetto Gastro, Taraji P. Henson, and Congresswoman Ayanna Pressley.
        <br />
        <br />
        In 2023, she was named deputy managing editor of talent, culture, and
        development, making her the second Black woman to ever grace the
        masthead. More recently, the City of Boston honored her work with a day
        in its honor: As of 2025 going forward, Nov. 21 is A Beautiful
        Resistance Day in our city. This year, the Boston Celtics honored her as
        a Hero Among Us.
        <br />
        <br />
        She joined the Globe in 2018. She was the 2023 chair of the Pulitzer
        jury for criticism, 2023 ONA winner for Commentary, 2022 YW Boston
        Women Achiever, a 2022 Murrow Award winner, a 2021 News Leader
        Association winner, and a 2021 Most Influential Bostonian. She opened
        for ABC/Hulu&apos;s &quot;Soul of a Nation&quot; three times. She is a
        2024 New England Regional Emmy Award winner.
        <br />
        <br />A native of Alexandria, Va. and a proud graduate of Norfolk State
        University, Osterheldt was a 2017 Nieman Fellow at Harvard University,
        where her studies focused on the intersection of art and justice.
      </>
    ),
  },
  {
    name: 'Kwame Dawes',
    slug: 'kwame-dawes',
    role: 'Keynote speaker',
    bio: (
      <>
        Kwame Dawes is the author of numerous books of poetry, fiction,
        criticism, and essays. His most recent collection is{' '}
        <em>Sturge Town</em> (W.W. Norton, 2024). Dawes is Professor of
        Literary Arts at Brown University. He teaches in the Pacific MFA Program
        and is the Series Editor of the African Poetry Book Series, Director of
        the African Poetry Book Fund, and Artistic Director of the Calabash
        International Literary Festival. He is a former Chancellor for the
        Academy of American Poets and a Fellow of the Royal Society of
        Literature. Kwame Dawes is the winner of the prestigious
        Windham/Campbell Award for Poetry and was a finalist for the 2022
        Neustadt International Prize for Literature. In 2022 Dawes was awarded
        the Order of Distinction Commander class by the Government of Jamaica.
        He is the Poet Laureate of Jamaica (2024-2027).
      </>
    ),
  },
]

function SpeakerCard({ speaker }) {
  return (
    <li className="speakers-grid scroll-mt-10" id={speaker.slug}>
      <h3 className="mb-4 mt-8 text-5xl uppercase">{speaker.name}</h3>
      <p className="mb-8 text-lg">{speaker.role}</p>
      {speaker.image ? (
        <div className="schedule-image">
          <img alt={speaker.name} src={speaker.image} />
        </div>
      ) : null}
      <details className="font-mono mt-6 speaker-bio text-lg">
        <summary className="focus:outline-none speaker-bio-summary textWrap">
          <span className="speaker-bio-preview">{speaker.bio}</span>
          <span className="speaker-bio-read-more">...READ MORE</span>
        </summary>
        <div className="speaker-bio-full">{speaker.bio}</div>
      </details>
    </li>
  )
}

export default function Speakers() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <Link href="/" legacyBehavior>
          <a className="hidden md:flex h-32 items-center justify-center">
            <h1 className="hidden">Roxbury Poetry Festival</h1>
            <svg className="fill-current" height="30" width="615">
              <use xlinkHref="#icon-logo-wide" />
            </svg>
          </a>
        </Link>
        <div className="border-b border-black mb-12 pb-10">
          <h2 className="font-bold my-10 md:text-4xl text-3xl">
            2026 Speakers
          </h2>
          <p className="font-mono md:text-lg text-base md:w-2/3">
            Meet the poets, artists, educators, editors, and cultural workers
            joining this year&apos;s festival.
          </p>
        </div>
        <ul className="gap-x-28 gap-y-20 grid pb-20 md:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.slug} speaker={speaker} />
          ))}
        </ul>
      </div>
    </Layout>
  )
}
