export default (songs) => {
  return `
    <ul>
      ${songs.map(({ artist, title }) => {
        return `
          <li>
            ${artist} - ${title}
          </li>
        `
      })}
    </ul>
   `;
}
