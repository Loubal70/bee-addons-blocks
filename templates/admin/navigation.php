<li x-on:click="menu = 1">
	<a href="#"
	   class="hover:bg-gray-200 text-yellow-600 group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold no-underline focus:shadow-none"
	   :class="menu === 1 ? 'text-yellow-600 bg-gray-200' : 'text-gray-800'">
		<svg class="h-6 w-6 shrink-0"
			 :class="menu === 1 ? 'text-yellow-600' : 'text-gray-800'"
			 fill="none" viewBox="0 0 24 24"
			 stroke-width="1.5" stroke="currentColor" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round"
				  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
		</svg>
		Général
	</a>
</li>
<li x-on:click="menu = 2">
	<a href="#"
	   class="hover:bg-gray-200 group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold no-underline focus:shadow-none"
	   :class="menu === 2 ? 'text-yellow-600 bg-gray-200' : 'text-gray-800'">
		<svg class="w-6 h-6 shrink-0"
			 :class="menu === 2 ? 'text-yellow-600' : 'text-gray-800'"
			 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
		</svg>

		Changelog
	</a>
</li>

