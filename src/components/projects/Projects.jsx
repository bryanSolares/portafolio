import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await axios.get("https://api.github.com/users/bryanSolares/repos?sort=created&per_page=6");
        setRepos(response.data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    }
    fetchRepos();
  }, []);

  return (
    <div className="py-12 md:py-16 lg:py-20 dark:text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Recent projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="rounded-lg shadow-2xl overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg bg-neutral-50"
            >
              <div className="p-4 md:p-6 rounded-lg shadow-md text-black">
                <h3 className="text-sm font-semibold mb-2">{repo.name}</h3>
                <h4 className="text-sm font-medium text-black mb-2">{repo.language || "No especificado"}</h4>
                <p className="text-black mb-4 text-xs">{repo.description || "No hay descripción disponible."}</p>
                <div className="mt-4 flex gap-2">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <GithubIcon className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
