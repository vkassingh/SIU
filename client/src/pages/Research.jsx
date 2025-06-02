import React from 'react';
import { GraduationCap, BookOpenCheck } from 'lucide-react';

const researchPapers = [
  {
    author: "Dr. Neeraj Kumar Dixit",
    title: "Design in-silico multi-pathogenic vaccine of dengue and zika viruses using envelope protein",
    journal: "International Journal of Pharmaceutical Sciences and Research",
    year: 2022,
  },
  {
    author: "Dr. Neeraj Kumar Dixit",
    title: "Design of Epitope- based vaccine for Dengue virus using Immunoinformatic approach",
    journal: "International Journal on Life Science and Bioengineering",
    year: 2018,
  },
  {
    author: "Dr. Neeraj Kumar Dixit",
    title: "Using an immunoinformatic approach, identification of B-cell envelope proteome for multipathogenic dengue and Zika viruses",
    journal: "International Journal of Pharmaceutical Sciences and Research",
    year: 2022,
  },
  {
    author: "Dr. Neeraj Kumar Dixit",
    title: "Design of Vaccine Targeting Zika Virus Polyprotein by immunoinformatics technique",
    journal: "International Journal of Peptide Research and Therapeutics",
    year: 2022,
  },
  {
    author: "Dr. Neeraj Kumar Dixit",
    title: "Epitope-based vaccine candidates developing against a life-threatening illness identified in silico approach",
    journal: "High Technology Letter",
    year: 2024,
  },
  {
    author: "Dr. Neeraj Kumar Dixit",
    title: "Implementation of immunoinformatics approach to design an epitope vaccine against Dengue infection",
    journal: "High Technology Letter",
    year: 2024,
  },
  {
    author: "Dr. Neeraj Kumar Dixit",
    title: "In Silico strategies for predicting Therapeutic Peptides targeting the Capsid Protein of the Dengue Virus",
    journal: "Journal of Proteins and Proteomics",
    year: 2024,
  }
];

export default function Research() {
  return (
    <div className="bg-gradient-to-r from-white to-gray-100 py-16 px-8 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg p-10">
        <div className="border-l-4 border-orange-600 pl-4 mb-8">
          <h2 className="text-3xl font-bold text-blue-900">University Research</h2>
          <p className="text-gray-600 mt-2">
            Explore pioneering research from Saroj International University's faculty, contributing to scientific advancement globally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="flex items-center space-x-4">
            <GraduationCap className="h-10 w-10 text-blue-800" />
            <div>
              <h3 className="text-xl font-semibold text-blue-900">Expert Faculty</h3>
              <p className="text-gray-600 text-sm">Led by experienced researchers across global journals.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <BookOpenCheck className="h-10 w-10 text-blue-800" />
            <div>
              <h3 className="text-xl font-semibold text-blue-900">Published Work</h3>
              <p className="text-gray-600 text-sm">Peer-reviewed publications in international journals.</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left border-t border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-sm text-blue-800 uppercase tracking-wider">
                <th className="px-4 py-3">Author</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Journal</th>
                <th className="px-4 py-3">Year</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm divide-y divide-gray-200">
              {researchPapers.map((paper, idx) => (
                <tr key={idx} className="hover:bg-blue-50 transition">
                  <td className="px-4 py-3">{paper.author}</td>
                  <td className="px-4 py-3">{paper.title}</td>
                  <td className="px-4 py-3">{paper.journal}</td>
                  <td className="px-4 py-3">{paper.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
