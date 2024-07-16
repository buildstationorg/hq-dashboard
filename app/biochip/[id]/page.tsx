export default function Page({ params }: { params: { id: string } }) {
  return <div>BioChip #{params.id}</div>
}