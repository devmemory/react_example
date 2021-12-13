import { fetchProfileData } from "./fake_api"

const resource = fetchProfileData()

function TestComponent() {
    const user = resource.user.read()
    const posts = resource.posts.read()

    return (
        <div style={{ height: '100vh', width: '100vw', display: 'grid', placeContent: 'center' }}>
            <h1>{user.name}</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default TestComponent
