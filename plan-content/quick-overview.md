# Quick Architecture Overview - One Page

## 🎯 The Big Picture

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER INTERFACE                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────────┐   │
│  │  Upload  │  │   Chat   │  │ Profile  │  │ 3D Avatar   │   │
│  │   CV     │  │Interface │  │ Display  │  │ Animation   │   │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └──────┬──────┘   │
└───────┼─────────────┼─────────────┼────────────────┼──────────┘
        │             │             │                │
        └─────────────┴─────────────┴────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────────┐
        │      FRONTEND STATE MANAGEMENT            │
        │  - User Profile Data                      │
        │  - Conversation History                   │
        │  - Learning Path Progress                 │
        └───────────────────┬───────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────────┐
        │         API LAYER (OpenRouter)            │
        │  POST /api/upload-cv                      │
        │  POST /api/chat                           │
        │  POST /api/generate-path                  │
        └───────────────────┬───────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────────┐
        │      AGENT LOGIC (Claude Sonnet)          │
        │                                           │
        │  1. Parse & Extract Context               │
        │  2. Ask Clarifying Questions              │
        │  3. Build User Profile                    │
        │  4. Query Knowledge Base                  │
        │  5. Generate Personalized Path            │
        └───────────────────┬───────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────────┐
        │        KNOWLEDGE BASE (JSON)              │
        │  - 20-30 Curated Resources                │
        │  - Skills Mapping                         │
        │  - Difficulty Levels                      │
        │  - Duration & Prerequisites               │
        └───────────────────────────────────────────┘
```

## 🔄 User Journey Flow

```
Step 1: INPUT
├─ Option A: Upload CV (PDF/DOCX)
└─ Option B: Answer 3 questions

Step 2: EXTRACTION
├─ Parse document or conversation
├─ Extract: role, skills, experience
└─ Identify: learning goal

Step 3: CLARIFICATION (if needed)
├─ "What's your target role?"
├─ "How much time per week?"
└─ "Prefer video or reading?"

Step 4: GENERATION
├─ Query knowledge base
├─ Match user level & goals
├─ Rank by relevance
└─ Create 3-5 resource path

Step 5: DISPLAY
├─ Beautiful card layout
├─ Progress tracking
├─ 3D avatar guidance
└─ Export options
```

## 📊 Data Flow (Simplified)

```
CV/Chat Input
    ↓
[ Extract Context ]
    ↓
[ Build User Profile ]
    ↓
[ Search Knowledge Base ]
    ↓
[ Generate Learning Path ]
    ↓
Display to User
```

## 🛠 Tech Stack At A Glance

**Frontend**
- Next.js 14
- React Three Fiber (3D)
- Tailwind CSS
- React Context

**Backend**
- OpenRouter API
- Claude Sonnet 4
- Simple JSON database
- PDF parsing

**Integration**
- REST API endpoints
- JSON data exchange
- File upload handling

## 👥 Team Responsibilities

| Area | Tasks |
|------|-------|
| **Frontend Dev** | UI components, 3D avatar, API integration, state management |
| **Backend Dev** | Agent logic, prompts, data parsing, knowledge base queries |
| **Full Stack** | API endpoints, file uploads, deployment, testing |
| **Content** | Curate 20-30 resources, write descriptions, categorize |
| **Design** | UI/UX polish, demo flow, pitch deck |

## ⚡ MVP Checklist (What We MUST Build)

- [ ] Upload CV or answer questions
- [ ] Extract user info accurately
- [ ] Ask max 2-3 clarifying questions
- [ ] Generate personalized path (5-7 resources)
- [ ] Display path beautifully
- [ ] Track completion progress
- [ ] 3D avatar with basic animation
- [ ] Works end-to-end in demo

## 🎪 Demo Script (60 seconds)

1. **Problem** (10s): "Finding the right learning content is overwhelming"
2. **Solution** (10s): "Meet your AI learning mentor - just upload your CV"
3. **Demo** (30s): Live demo from upload to personalized path
4. **Impact** (10s): "From hours of searching to 30 seconds of perfection"

## 🚀 Quick Start Commands

```bash
# Frontend
cd hackathon-teleric
npm install
npm run dev

# Backend (if separate)
cd backend
pip install -r requirements.txt
python app.py

# Or integrate in Next.js
# Add API routes in /app/api/
```

## 📁 File Structure

```
hackathon-teleric/
├── app/
│   ├── page.tsx                    # Main page
│   ├── api/
│   │   ├── chat/route.ts          # Chat endpoint
│   │   ├── upload/route.ts        # Upload endpoint
│   │   └── generate-path/route.ts # Path generation
│   └── components/
│       ├── FileUpload.tsx
│       ├── ChatInterface.tsx
│       ├── LearningPath.tsx
│       └── Avatar3D.tsx
├── lib/
│   ├── agent-logic.ts             # Agent prompts
│   ├── knowledge-base.json        # Resources
│   └── types.ts                   # TypeScript types
└── public/
    └── models/                     # 3D avatar files
```

## 🎯 Success Criteria

**For Judges:**
1. Works without bugs in live demo
2. Personalization is clearly visible
3. UI is polished and delightful
4. Solves real problem innovatively
5. Team shows good collaboration

**For Users:**
1. Faster than manual search
2. More relevant than generic results
3. Clear next steps
4. Builds confidence in path

---

## 🤝 Communication Channels

- **Daily Standup**: 10 min sync on progress
- **Shared Docs**: Google Sheets for knowledge base
- **Code**: GitHub repo with clear branches
- **Questions**: Slack/Discord for quick help
- **Decisions**: Document in README

**Remember**: Ship something working > Perfect something incomplete
