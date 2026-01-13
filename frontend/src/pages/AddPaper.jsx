import { useState } from "react";
import { createPaper } from "../services/api";
import {
  RESEARCH_DOMAINS,
  READING_STAGES,
  IMPACT_SCORES
} from "../constants/enums";

export default function AddPaper() {
  const [form, setForm] = useState({
    title: "",
    firstAuthor: "",
    researchDomain: "",
    readingStage: "",
    citationCount: 0,
    impactScore: "Unknown"
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    await createPaper(form);
    alert("Paper added successfully");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <header className="mb-6">
        <h2 className="text-2xl font-semibold">Add Research Paper</h2>
        <p className="section-subtitle">
          Store a new paper and track its reading progress
        </p>
      </header>

      <form onSubmit={submit} className="card p-6 grid grid-cols-2 gap-4">
        <input
          name="title"
          placeholder="Paper title"
          className="border p-2 col-span-2 rounded"
          onChange={handleChange}
          required
        />

        <input
          name="firstAuthor"
          placeholder="First author"
          className="border p-2 rounded"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="citationCount"
          placeholder="Citation count"
          className="border p-2 rounded"
          onChange={handleChange}
        />

        <select name="researchDomain" className="border p-2 rounded" onChange={handleChange} required>
          <option value="">Research Domain</option>
          {RESEARCH_DOMAINS.map(d => <option key={d}>{d}</option>)}
        </select>

        <select name="readingStage" className="border p-2 rounded" onChange={handleChange} required>
          <option value="">Reading Stage</option>
          {READING_STAGES.map(s => <option key={s}>{s}</option>)}
        </select>

        <select name="impactScore" className="border p-2 rounded col-span-2" onChange={handleChange}>
          {IMPACT_SCORES.map(i => <option key={i}>{i}</option>)}
        </select>

        <button className="col-span-2 bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition">
          Add Paper
        </button>
      </form>
    </div>
  );
}
