# Database Schema

## Users Collection

```json
{
  "_id": "ObjectId",
  "name": "String",
  "email": "String",
  "avatar": "String",
  "googleId": "String",
  "createdAt": "Date"
}
```

---

## Career Profiles Collection

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "targetRole": "String",
  "college": "String",
  "year": "String",
  "cgpa": "Number",
  "dailyHours": "Number",
  "timeline": "String",
  "preferredLocation": "String"
}
```

---

## Resume Analyses Collection

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "atsScore": "Number",
  "skills": [],
  "projects": [],
  "experience": [],
  "achievements": [],
  "missingKeywords": [],
  "resumeSuggestions": []
}
```

---

## GitHub Analyses Collection

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "username": "String",
  "repos": "Number",
  "commits": "Number",
  "languages": [],
  "stars": "Number",
  "followers": "Number",
  "activityScore": "Number"
}
```

---

## Assessments Collection

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "dsaScore": "Number",
  "oopScore": "Number",
  "osScore": "Number",
  "dbmsScore": "Number",
  "cnScore": "Number",
  "overallScore": "Number",
  "strengths": [],
  "weaknesses": []
}
```

---

## Roadmaps Collection

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "readinessScore": "Number",
  "mustDo": [],
  "recommended": [],
  "milestones": [],
  "estimatedTimeline": "String"
}
```

---

## Mentor Chats Collection

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "message": "String",
  "response": "String",
  "createdAt": "Date"
}
```
