import { useQuery } from 'urql'

import { EXPLORE_PROFILES } from '../services/lens-api'

// TODO: same as graphql schema
interface Profile {
  id: number
  name: string
  handle: string
  bio: string
  stats: {
    totalFollowers: number
  }
}

const ExploreProfiles = () => {
  const [result] = useQuery({
    query: EXPLORE_PROFILES,
  })

  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <div className="space-y-2 my-4">
      <h2 className="font-bold text-2xl leading-12">Most Followers</h2>
      {data.exploreProfiles.items.map((profile: Profile) => (
        <div className="bg-slate-100 p-4" key={profile.id}>
          <p className="text-black">{profile.handle}</p>
          <p className="text-slate-500">{profile.bio}</p>
          <p>Followers : {profile.stats.totalFollowers}</p>
        </div>
      ))}
    </div>
  )
}

export default ExploreProfiles
