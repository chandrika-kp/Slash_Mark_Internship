
In the backend, my server runs on port 5000:
`http://localhost:5000`

In the frontend, I used the above URL/route:
`http://localhost:5000/execute`

### Deployment

I deployed the backend on Render:
---------------------------------------------------------------------
Backend URL: `https://codeeditor-f6p1.onrender.com/`
---------------------------------------------------------------------
After replacing the server URL with the above Render URL in the frontend, the URL/route becomes:
`https://codeeditor-f6p1.onrender.com/execute`

To achieve this, I made changes in App.js to fetch the backend URL:
`Backend_URL/execute`

After making these changes, I built the frontend and deployed it on Netlify:
----------------------------------------------------------------------
Frontend URL: `https://onlinecodeeditorr.netlify.app/`
----------------------------------------------------------------------