const App = () => {
	return (
		<div className='min-h-screen bg-white text-black font-mono text-sm leading-relaxed'>
			<div className='max-w-2xl mx-auto px-6 py-12'>
				{/* Header */}
				<div className='mb-10'>
					<h1 className='text-2xl font-bold mb-3 text-gray-900'>
						hi, i am{' '}
						<a
							href='/'
							className='text-gray-800 underline hover:text-blue-700'
						>
							adarsh singh
						</a>
						!
					</h1>
					{/* <p className='mb-4 text-gray-700 text-base'>
						i am a software engineer and computer science student at axis
						institute of technology & management. mainly work in full-stack
						development, backend systems and love building efficient solutions.
					</p> */}
					<p className='mb-4 text-gray-700 text-base'>
						i am a final year student, studying computer science. mainly work in
						llm post-training, making web apps (MERN) and love exploring new
						things.
					</p>
				</div>

				{/* Contact */}
				<div className='mb-10'>
					<p className='mb-3 text-gray-800'>
						📧{' '}
						<a
							href='mailto:officialadarsh2021@gmail.com'
							className='text-gray-800 underline hover:text-blue-700 font-medium'
						>
							officialadarsh2021@gmail.com
						</a>
					</p>
					<p className='mb-3 text-gray-800'>
						📱 <span className='font-medium'>875-630-9374</span>
					</p>
					<p className='mb-3 text-gray-800'>
						💼{' '}
						<a
							href='https://linkedin.com/in/adarsh-singh-a7370b248'
							className='text-gray-800 underline hover:text-blue-700 font-medium'
							target='_blank'
							rel='noopener noreferrer'
						>
							linkedin
						</a>
					</p>
					<p className='mb-5 text-gray-800'>
						💻{' '}
						<a
							href='https://github.com/adarshsingh7'
							className='text-gray-800 underline hover:text-blue-700 font-medium'
							target='_blank'
							rel='noopener noreferrer'
						>
							github
						</a>
					</p>
				</div>

				{/* Experience */}
				<div className='mb-10'>
					<Heading text='experience' />
					<div className='ml-4'>
						<div className='mb-6'>
							<p className='mb-2 text-gray-800'>
								- backend developer intern @{' '}
								<span className='font-bold text-gray-900'>
									prodesk technologies
								</span>{' '}
								[jun 25' - jul 25']
							</p>
							<div className='ml-2 text-gray-600 text-sm leading-relaxed'>
								<p>
									• developed modular backend services using node.js and express
								</p>
								<p>
									• integrated jwt-based authentication and reduced api latency
									by 30%
								</p>
								<p>
									• collaborated with frontend teams and devops for ci workflows
								</p>
							</div>
						</div>
						<div className='mb-6'>
							<p className='mb-2 text-gray-800'>
								- software engineer intern @{' '}
								<span className='font-bold text-gray-900'>
									backend coders india
								</span>{' '}
								[jul 24' - oct 24']
							</p>
							<div className='ml-2 text-gray-600 text-sm leading-relaxed'>
								<p>
									• built full-stack taxi management application for uk client
								</p>
								<p>
									• implemented real-time booking system reducing data entry
									time by 30%
								</p>
								<p>
									• integrated caller notifications and flexible booking forms
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Projects */}
				<div className='mb-10'>
					{/* <h2 className='text-xl font-bold mb-5 text-gray-900'>projects</h2> */}
					<Heading text='projects' />
					<div className='ml-4'>
						<p className='mb-3 text-gray-800'>
							<a
								href='https://github.com/Adarshsingh7/fleet-flow'
								className='text-gray-800 underline hover:text-blue-700 font-medium'
							>
								fleetflow - real-time tracking system
							</a>
							:
							<span className='text-gray-600 ml-1'>
								full-stack mern & react native app for school bus tracking
							</span>
						</p>
						<p className='mb-5 text-gray-800'>
							<a
								href='https://github.com/Adarshsingh7/restro-dashboard'
								className='text-gray-800 underline hover:text-blue-700 font-medium'
							>
								restaurant management application
							</a>
							:
							<span className='text-gray-600 ml-1'>
								react-based system with efficient data fetching and responsive
								ui
							</span>
						</p>
					</div>
				</div>

				{/* Achievements */}
				<div className='mb-8'>
					{/* <h2 className='text-base font-normal mb-4'>achievements</h2> */}
					<Heading text='achievements' />
					<div className='ml-4'>
						<p className='mb-2'>
							- <span className='font-medium'>immerse hackathon winner</span>:
							developed smartspeak, an ai-powered voice analysis tool
						</p>
						<p className='ml-2 text-gray-700 mb-4'>
							built scalable mvp in 36 hours with 90% accuracy speech evaluation
							using ensemble ml models
						</p>
					</div>
				</div>

				{/* Technical Skills */}
				<div className='mb-8'>
					{/* <h2 className='text-base font-normal mb-4'>technical skills</h2> */}
					<Heading text='technical skills' />
					<div className='ml-4 text-gray-700'>
						<p className='mb-2'>
							<span className='text-black'>languages:</span> javascript, python,
							java, c++, mysql, mongodb
						</p>
						<p className='mb-2'>
							<span className='text-black'>frameworks:</span> react, express,
							node.js, react-native, redux
						</p>
						<p className='mb-2'>
							<span className='text-black'>tools:</span> git, vs code, digital
							ocean, aws
						</p>
						<p className='mb-4'>
							<span className='text-black'>systems:</span> gnu/linux, macos,
							windows
						</p>
					</div>
				</div>

				{/* Education */}
				{/* <div className='mb-8'>
					<Heading text='education' />
					<div className='ml-4'>
						<p className='mb-2'>
							- <span className='font-medium'>b.tech computer science</span> @
							axis institute of technology & management [sep 22' - may 26']
						</p>
						<p className='ml-2 text-gray-700 mb-2'>cgpa: 7.5/10</p>
						<p className='mb-2'>
							- <span className='font-medium'>senior secondary (pcm)</span> @
							air force school [apr 21' - apr 22']
						</p>
						<p className='ml-2 text-gray-700 mb-4'>percentage: 80%</p>
					</div>
				</div> */}

				{/* Certifications */}
				{/* <div className='mb-8'>
					<Heading text='certifications' />
					<div className='ml-4'>
						<p className='mb-2'>
							-{' '}
							<a
								href='#'
								className='text-gray-800 underline hover:text-blue-700'
							>
								the complete javascript course 2025
							</a>
							: comprehensive js training by jonas schmedtmann
						</p>
						<p className='mb-4'>
							-{' '}
							<a
								href='#'
								className='text-gray-800 underline hover:text-blue-700'
							>
								node.js, express, mongodb bootcamp
							</a>
							: complete backend development course
						</p>
					</div>
				</div> */}

				{/* Footer */}
				<div className='border-t border-gray-200 pt-6 mt-12'>
					<p className='text-gray-600 text-xs'>
						built with react & tailwind css • last updated sep 2025
					</p>
				</div>
			</div>
		</div>
	);
};

const Heading = ({ text }: { text: string }) => (
	<h2 className='text-xl font-bold mb-5 text-gray-900'>{text}</h2>
);

export default App;
