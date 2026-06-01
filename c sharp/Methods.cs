using System;
using System.Collections.Generic;

namespace Labirintus
{
    class Methods
    {
        /// <summary>
        /// Megadja, hogy hány termet tartamaz a térkép
        /// </summary>
        /// <param name="map">Labirintus mátrixa</param>
        /// <returns>Termek száma</returns>
        static int GetRoomNumber(char[,] map)
        {
            if (map == null) return 0;
            int rows = map.GetLength(0);
            int cols = map.GetLength(1);
            bool[,] visited = new bool[rows, cols];
            int rooms = 0;

            for (int r = 0; r < rows; r++)
            {
                for (int c = 0; c < cols; c++)
                {
                    if (!visited[r, c] && map[r, c] == '.')
                    {
                        rooms++;
                        var stack = new Stack<(int r, int c)>();
                        stack.Push((r, c));
                        visited[r, c] = true;

                        while (stack.Count > 0)
                        {
                            var (cr, cc) = stack.Pop();
                            (int nr, int nc)[] neighbors = new (int, int)[]
                            {
                                (cr - 1, cc), (cr + 1, cc), (cr, cc - 1), (cr, cc + 1)
                            };
                            foreach (var (nr2, nc2) in neighbors)
                            {
                                if (nr2 >= 0 && nr2 < rows && nc2 >= 0 && nc2 < cols && !visited[nr2, nc2] && map[nr2, nc2] == '.')
                                {
                                    visited[nr2, nc2] = true;
                                    stack.Push((nr2, nc2));
                                }
                            }
                        }
                    }
                }
            }

            return rooms;
        }
        /// <summary>
        /// A kapott térkép széleit végignézve megállapítja, hogy hány kijárat van.
        /// </summary>
        /// <param name="map">Labirintus mátrixa</param>
        /// <returns>Az alkalmas kijáratok száma</returns>
        static int GetSuitableEntrance(char[,] map)
        {
            if (map == null) return 0;
            int rows = map.GetLength(0);
            int cols = map.GetLength(1);
            var counted = new HashSet<string>();
            int count = 0;

            bool AllowsNorth(char ch) => ch == '╬' || ch == '╩' || ch == '╣' || ch == '╠' || ch == '╝' || ch == '╚' || ch == '║';
            bool AllowsSouth(char ch) => ch == '╬' || ch == '╦' || ch == '╣' || ch == '╠' || ch == '╗' || ch == '╔' || ch == '║';
            bool AllowsWest(char ch) => ch == '╬' || ch == '╩' || ch == '╣' || ch == '═' || ch == '╝' || ch == '╗' || ch == '╦';
            bool AllowsEast(char ch) => ch == '╬' || ch == '╩' || ch == '╦' || ch == '╠' || ch == '╔' || ch == '╚' || ch == '═';

            for (int c = 0; c < cols; c++)
            {
                char ch = map[0, c];
                if (AllowsNorth(ch))
                {
                    string key = $"0:{c}";
                    if (!counted.Contains(key)) { counted.Add(key); count++; }
                }
            }
            for (int c = 0; c < cols; c++)
            {
                char ch = map[rows - 1, c];
                if (AllowsSouth(ch))
                {
                    string key = $"{rows - 1}:{c}";
                    if (!counted.Contains(key)) { counted.Add(key); count++; }
                }
            }
            for (int r = 0; r < rows; r++)
            {
                char ch = map[r, 0];
                if (AllowsWest(ch))
                {
                    string key = $"{r}:0";
                    if (!counted.Contains(key)) { counted.Add(key); count++; }
                }
            }
            for (int r = 0; r < rows; r++)
            {
                char ch = map[r, cols - 1];
                if (AllowsEast(ch))
                {
                    string key = $"{r}:{cols - 1}";
                    if (!counted.Contains(key)) { counted.Add(key); count++; }
                }
            }

            return count;
        }
        /// <summary>
        /// Megnézi, hogy van-e a térképen meg nem engedett karakter?
        /// </summary>
        /// <param name="map">Labirintus mátrixa</param>
        /// <returns>true - A térkép tartalmaz szabálytalan karaktert, false - nincs benne ilyen</returns>
        static bool IsInvalidElement(char[,] map)
        {
            if (map == null) return false;
            int rows = map.GetLength(0);
            int cols = map.GetLength(1);
            var allowed = new HashSet<char>() { '.', '█', '╬', '╩', '╦', '╣', '╠', '╝', '╚', '║', '═', '╗', '╔' };
            for (int r = 0; r < rows; r++)
            {
                for (int c = 0; c < cols; c++)
                {
                    if (!allowed.Contains(map[r, c])) return true;
                }
            }
            return false;
        }
        /// <summary>
        /// Visszaadja azoknak a járatkaraktereknek a pozícióját, amelyekhez egyetlen szomszéd pozícióból sem lehet eljutni.
        /// </summary>
        /// <param name="map">Labirintus mátrixa</param>
        /// <returns>A pozíciók "sor_index:oszlop_index" formátumban szerepelnek a lista elemeiként
        static List<string> GetUnavailableElements(char[,] map)
        {
            List<string> unavailables = new List<string>();
            if (map == null) return unavailables;
            int rows = map.GetLength(0);
            int cols = map.GetLength(1);

            bool AllowsNorth(char ch) => ch == '╬' || ch == '╩' || ch == '╣' || ch == '╠' || ch == '╝' || ch == '╚' || ch == '║';
            bool AllowsSouth(char ch) => ch == '╬' || ch == '╦' || ch == '╣' || ch == '╠' || ch == '╗' || ch == '╔' || ch == '║';
            bool AllowsWest(char ch) => ch == '╬' || ch == '╩' || ch == '╣' || ch == '═' || ch == '╝' || ch == '╗' || ch == '╦';
            bool AllowsEast(char ch) => ch == '╬' || ch == '╩' || ch == '╦' || ch == '╠' || ch == '╔' || ch == '╚' || ch == '═';

            for (int r = 0; r < rows; r++)
            {
                for (int c = 0; c < cols; c++)
                {
                    char ch = map[r, c];
                    if (ch == '.' || ch == '█') continue;

                    bool reachableFromNeighbor = false;

                    if (r - 1 >= 0)
                    {
                        char n = map[r - 1, c];
                        if (AllowsSouth(n)) reachableFromNeighbor = true;
                    }
                    if (!reachableFromNeighbor && r + 1 < rows)
                    {
                        char n = map[r + 1, c];
                        if (AllowsNorth(n)) reachableFromNeighbor = true;
                    }
                    if (!reachableFromNeighbor && c - 1 >= 0)
                    {
                        char n = map[r, c - 1];
                        if (AllowsEast(n)) reachableFromNeighbor = true;
                    }
                    if (!reachableFromNeighbor && c + 1 < cols)
                    {
                        char n = map[r, c + 1];
                        if (AllowsWest(n)) reachableFromNeighbor = true;
                    }

                    if (!reachableFromNeighbor)
                    {
                        unavailables.Add($"{r}:{c}");
                    }
                }
            }

            return unavailables;
        }
        /// <summary>
        /// Labiritust generál a kapott pozíciókat tartalmazó lista alapján. A lista elemei egymáshoz kapcsolódó járatok pozíciói.
        /// </summary>
        /// <param name="positionsList">"sor_index:oszlop_index" formátumban az egymáshoz kapcsolódó járatok pozícióit tartalmazó lista </param>
        /// <returns>A létrehozott labirintus térképe</returns>
        static char[,] GenerateLabyrinth(List<string> positionsList)
        {
            if (positionsList == null || positionsList.Count == 0)
            {
                return new char[1, 1] { { '.' } };
            }

            var coords = new List<(int r, int c)>();
            foreach (var item in positionsList)
            {
                var parts = item.Split(':');
                if (parts.Length != 2) continue;
                if (int.TryParse(parts[0], out int r) && int.TryParse(parts[1], out int c)) coords.Add((r, c));
            }

            if (coords.Count == 0) return new char[1, 1] { { '.' } };

            int minR = int.MaxValue, minC = int.MaxValue, maxR = int.MinValue, maxC = int.MinValue;
            foreach (var (r, c) in coords)
            {
                if (r < minR) minR = r;
                if (c < minC) minC = c;
                if (r > maxR) maxR = r;
                if (c > maxC) maxC = c;
            }

            int rows = maxR - minR + 1;
            int cols = maxC - minC + 1;
            char[,] map = new char[rows, cols];
            for (int r = 0; r < rows; r++) for (int c = 0; c < cols; c++) map[r, c] = '.';

            foreach (var (r, c) in coords)
            {
                map[r - minR, c - minC] = '╬';
            }

            return map;
        }
    }
}