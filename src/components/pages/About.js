import React from "react";

function About() {
  return (
		<div>
			<h1 className="bg-secondary p-0 rounded text-secondary text-center">
				<i className="fas fa-info-circle mx-2"></i>
				<i>About</i>
			</h1>

			<div class="list-group">
				<a
					href="attila5287.github.io/"
					class="list-group-item list-group-item-action flex-column align-items-start active"
				>
					<div class="d-flex w-100 justify-content-between">
						<h4 class="mb-1">React</h4>
						<h1 class="fab fa-react mb-0"></h1>
					</div>
					<p clas="my-0">React, Axios, Bootswatch, Font-Awesome</p>
				</a>
				<a
					href="/discover"
					class="list-group-item list-group-item-action flex-column align-items-start"
				>
					<div class="d-flex w-100 justify-content-between">
						<h3 class="mb-1">Discover</h3>
						<h1 class="fas fa-compass mb-0"></h1>
					</div>
					<p class="mb-0 border-bottom border-light">
						This page displays a photo of a random dog retrieved from the
						<a href="https://dog.ceo/dog-api/" class="mx-1">
							Dog Ceo API
						</a>
						This page contains 2 clickable buttons: one for passing or
						"thumbs-downing" a dog, and one for picking or "thumbs-upping" a
						dog.
					</p>
					<small>
						<i>
							When either button is clicked, a new dog image is loaded from the
							API.
						</i>
					</small>
				</a>
				<a
					href="/search"
					class="list-group-item list-group-item-action flex-column align-items-start"
				>
					<div class="d-flex w-100 justify-content-between">
						<h3 class="mb-1">Search</h3>
						<h1 class="fas fa-search mb-0"></h1>
					</div>
					<p class="mb-1">
						This page allows you to search the
						<a href="https://dog.ceo/dog-api/" class="mx-1">
							Dog Ceo API
						</a>
						for all dogs by breed. After a search is made, a list of all of the
						results appears underneath.
					</p>
				</a>
				<a
					href="https://github.com/attila5287/"
					class="list-group-item list-group-item-action flex-column align-items-start"
				>
					<div class="d-flex w-100 justify-content-between">
						<h6 class="mb-1">@attila5287</h6>
						<h1 class="fab fa-github mb-0"></h1>
					</div>
				</a>
				<a
					href="attila5287.github.io/"
					class="list-group-item list-group-item-action flex-column align-items-start"
				>
					<div class="d-flex w-100 justify-content-between">
						<h6 class="mb-1">Developer</h6>
						<img
							src="https://raw.githubusercontent.com/attila5287/img_readme/main/all/dev.jpg"
							alt="dev-img"
							class="rounded"
						/>
					</div>
				</a>
			</div>
		</div>
	);
}

export default About;
