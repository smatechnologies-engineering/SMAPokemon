import React, { FC } from 'react'
import {
  PokemonGen,
  PokemonStats,
  PokemonType,
} from '../interfaces/pokemonInterface'
import '../styles/components/PokemonGenTable.css'
import { ColoredChip } from './PokemonInfoCard'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  IconButton,
  Box,
  useTheme,
  TableFooter,
} from '@mui/material'

import FirstPageIcon from '@mui/icons-material/FirstPage'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import LastPageIcon from '@mui/icons-material/LastPage'

export type PokemonProps = JSX.IntrinsicElements['p'] & {
  readonly pokemonGeneration: Array<PokemonGen>
}

interface TablePaginationActionsProps {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void
}

export const PokemonGenTable: FC<PokemonProps> = ({
  pokemonGeneration,
}): JSX.Element => {
  const [page, setPage] = React.useState<number>(0)

  const [rowsPerPage, setRowsPerPage] = React.useState<number>(3)

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme()
    const { count, page, rowsPerPage, onPageChange } = props

    const handleFirstPageButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, 0)
    }

    const handleBackButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, page - 1)
    }

    const handleNextButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, page + 1)
    }

    const handleLastPageButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
    }

    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    )
  }

  const emptyRows: number =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - pokemonGeneration.length)
      : 0

  return (
    <div>
      {pokemonGeneration.length > 2 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell>Pokemon#</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">HP</TableCell>
                <TableCell align="right">Attack</TableCell>
                <TableCell align="right">Defense</TableCell>
                <TableCell align="right">Sp.Atk</TableCell>
                <TableCell align="right">Sp.Def</TableCell>
                <TableCell align="right">Speed</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? pokemonGeneration
                    .sort(function (a, b) {
                      return a.id - b.id
                    })
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : pokemonGeneration
              ).map((poke: PokemonGen) => {
                return (
                  <TableRow key={poke.name}>
                    <TableCell component="th" scope="row">
                      <img
                        alt={poke.name}
                        src={
                          poke.sprites.versions['generation-viii'].icons
                            .front_default
                        }
                      />
                      <p className="pokeNum">{poke.id}</p>
                    </TableCell>
                    <TableCell align="right">{poke.name}</TableCell>
                    <TableCell align="right">
                      {poke.types.map((t: PokemonType) => (
                        <ColoredChip
                          label={t.type.name}
                          key={t.type.name}
                          eltype={t.type.name}
                        />
                      ))}
                    </TableCell>
                    {poke.stats.map((stat: PokemonStats, idx: number) => {
                      return (
                        <TableCell align="right" key={idx}>
                          {stat.base_stat}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[3, 6, 9]}
                  colSpan={3}
                  count={pokemonGeneration.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      ) : null}
      {pokemonGeneration.length == 1 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell>Pokemon#</TableCell>
                <TableCell align="right">Default</TableCell>
                {pokemonGeneration[0].sprites.front_shiny == null ||
                pokemonGeneration[0].sprites.front_shiny == undefined ? null : (
                  <TableCell align="right">Shiny</TableCell>
                )}
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">HP</TableCell>
                <TableCell align="right">Attack</TableCell>
                <TableCell align="right">Defense</TableCell>
                <TableCell align="right">Sp.Atk</TableCell>
                <TableCell align="right">Sp.Def</TableCell>
                <TableCell align="right">Speed</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? pokemonGeneration
                    .sort(function (a, b) {
                      return a.id - b.id
                    })
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : pokemonGeneration
              ).map((poke: PokemonGen) => {
                return (
                  <TableRow key={poke.name}>
                    <TableCell component="th" scope="row">
                      <img
                        alt={poke.name}
                        src={
                          poke.sprites.versions['generation-viii'].icons
                            .front_default
                        }
                      />
                      <p className="pokeNum">{poke.id}</p>
                    </TableCell>
                    <TableCell align="right">
                      <img alt={poke.name} src={poke.sprites.front_default} />
                    </TableCell>
                    {poke.sprites.front_shiny == null ||
                    poke.sprites.front_shiny == undefined ? null : (
                      <TableCell align="right">
                        <img alt="shiny" src={poke.sprites.front_shiny} />
                      </TableCell>
                    )}
                    <TableCell align="right">
                      {poke.types.map((t: PokemonType) => (
                        <ColoredChip
                          label={t.type.name}
                          key={t.type.name}
                          eltype={t.type.name}
                        />
                      ))}
                    </TableCell>
                    {poke.stats.map((stat: PokemonStats, idx: number) => {
                      return (
                        <TableCell align="right" key={idx}>
                          {stat.base_stat}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </div>
  )
}
